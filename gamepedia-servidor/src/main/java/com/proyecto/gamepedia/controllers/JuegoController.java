package com.proyecto.gamepedia.controllers;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.gamepedia.models.Juego;
import com.proyecto.gamepedia.repositories.DesarrolladoraRepository;
import com.proyecto.gamepedia.repositories.GeneroRepository;
import com.proyecto.gamepedia.repositories.JuegoRepository;
import com.proyecto.gamepedia.repositories.PlataformaRepository;
import com.proyecto.gamepedia.services.JuegoService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class JuegoController {

	/* inyeccion para el CRUD */
	@Autowired
	private JuegoService serviJuego;
	
	/* Para los contadorores de registros o entidades */
	@Autowired
	private GeneroRepository repoGenero;
	@Autowired 
	private JuegoRepository repoJuego;
	@Autowired
	private DesarrolladoraRepository repoDes;
	@Autowired
	private PlataformaRepository repoPlataforma;

	// Endpoint para obtener la lista de juegos
	@GetMapping("/juego")
	public ResponseEntity<List<Juego>> listadoJuegos() {
		// Devuelve una respuesta exitosa con la lista de juegos
		return ResponseEntity.ok(serviJuego.listado());
	}

	// Endpoint para grabar un juego
	@PostMapping("/juego")
	public ResponseEntity<Juego> grabarJuego(@RequestBody Juego juego) {
		// Graba el juego y devuelve una respuesta exitosa con el juego grabado
		return ResponseEntity.ok(serviJuego.grabar(juego));
	}

	// Endpoint para buscar un juego por su ID
	@GetMapping("/juego/{id}")
	public ResponseEntity<Juego> buscarJuegoPorId(@PathVariable Integer id) {
		// Busca un juego por su ID y devuelve una respuesta exitosa con el juego
		// encontrado
		Juego juego = serviJuego.buscar(id);
		return ResponseEntity.ok(juego);
	}

	// Endpoint para eliminar un juego por su ID
	@DeleteMapping("/juego/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarJuego(@PathVariable Integer id) {
		// Elimina el juego por su ID
		serviJuego.eliminar(id);

		// Crea una respuesta que indica que el juego ha sido eliminado con éxito
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);

		// Devuelve una respuesta exitosa con la indicación de eliminación
		return ResponseEntity.ok(respuesta);
	}

	// Método que busca juegos por título y devuelve una lista en la respuesta
	/* http://localhost:8091/api/v1/juego/buscar?titulo=sea */
	@GetMapping("/juego/buscar")
	public ResponseEntity<List<Juego>> buscarJuegoByTitulo(@RequestParam String titulo) {
		List<Juego> juego = serviJuego.buscarJuegoPorTitulo(titulo);
		return ResponseEntity.ok(juego);
	}
	
	// Contadores de registros o entidades
	@GetMapping("/menu-admin")
	public Map<String, Long> getMenuAdmin() {
	    // Este método obtiene estadísticas para el menú de administrador.
	    Map<String, Long> menuAdmin = new HashMap<>();
	   
	    // Obtiene el número de géneros en la base de datos.
	    Long nroGeneros = repoGenero.count();    
	    // Obtiene el número de desarrolladoras en la base de datos.
	    Long nroDesarrolladoras = repoDes.count();	    
	    // Obtiene el número de juegos en la base de datos.
	    Long nroJuegos = repoJuego.count();
	    Long nroPlataformas = repoPlataforma.count();
	    
	    // Agrega las estadísticas al mapa de menú de administrador.
	    menuAdmin.put("Generos", nroGeneros);
	    menuAdmin.put("Desarrolladoras", nroDesarrolladoras);
	    menuAdmin.put("Juegos", nroJuegos);
	    menuAdmin.put("Plataformas", nroPlataformas);
	    
	    // Devuelve el mapa con las estadísticas.
	    return menuAdmin;
	}
	
	/* Generar Reporte PDF con PDF-BOX */
	@GetMapping("/generar-pdf-juegos")
	public void generarInforme(HttpServletResponse response) throws IOException {
	    try {
	        PDDocument document = new PDDocument();
	        PDPage page = new PDPage();
	        document.addPage(page);

	        PDPageContentStream contentStream = new PDPageContentStream(document, page);
	        
	        // Agregar el título
	        contentStream.beginText();
	        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 18);
	        contentStream.newLineAtOffset(100, 750);
	        contentStream.showText("Reporte Juegos");
	        contentStream.endText();

	        // Obtén datos de la clase Juego
	        List<Juego> listaJuegos = serviJuego.listado();

	        // Definir el ancho de columna y el espacio entre celdas
	        float margin = 50;
	        float yStart = page.getMediaBox().getHeight() - margin;
	        float tableWidth = page.getMediaBox().getWidth() - 2 * margin;
	        float yPosition = yStart;
	        // float yPositionNewPage = 0;
	        int rows = listaJuegos.size() + 1;
	        int cols = 5;

	        float rowHeight = 20f;
	        float tableHeight = rowHeight * rows;
	        float tableYBottom = yStart - tableHeight;

	        // Encabezados de la tabla
	        float tableX = margin;
	        float nextY = yStart;
	        String[] columnHeaders = {"Titulo", "Lanzamiento", "Productora", "Genero", "Plataforma"};
	        for (int i = 0; i < cols; i++) {
	            contentStream.beginText();
	            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
	            contentStream.newLineAtOffset(tableX, nextY - 15);
	            contentStream.showText(columnHeaders[i]);
	            contentStream.endText();
	            tableX += 100;
	        }

	        // Dibujar líneas horizontales
	        contentStream.setLineWidth(1f);
	        contentStream.moveTo(margin, yPosition);
	        contentStream.lineTo(margin + tableWidth, yPosition);
	        contentStream.stroke();
	        yPosition -= rowHeight;

	        // Agregar datos a la tabla
	        for (Juego juego : listaJuegos) {
	            float xPosition = margin;
	            String[] rowData = {
	                juego.getTitJue() != null ? juego.getTitJue() : "", // Comprobar si el campo es nulo
	                juego.getFecLanJue() != null ? new SimpleDateFormat("yyyy-MM-dd").format(juego.getFecLanJue()) : "",
	                juego.getJuegoDesarrolladora() != null ? juego.getJuegoDesarrolladora().getNomDes() : "",
	                juego.getJuegoGenero() != null ? juego.getJuegoGenero().getNomGen() : "",
	                juego.getJuegoPlataforma() != null ? juego.getJuegoPlataforma().getPlataforma() : ""
	            };

	            for (int i = 0; i < cols; i++) {
	                contentStream.beginText();
	                contentStream.setFont(PDType1Font.HELVETICA, 12);
	                contentStream.newLineAtOffset(xPosition, yPosition - 15);
	                contentStream.showText(rowData[i]);
	                contentStream.endText();
	                xPosition += 100;
	            }

	            yPosition -= rowHeight;

	            if (yPosition < tableYBottom) {
	                contentStream.close();
	                PDPage newPage = new PDPage();
	                document.addPage(newPage);
	                contentStream = new PDPageContentStream(document, newPage);
	                yPosition = yStart;
	            }
	        }

	        contentStream.close();

	        response.setContentType("application/pdf");
	        response.setHeader("Content-Disposition", "inline; filename=informe.pdf");

	        document.save(response.getOutputStream());
	        document.close();
	    } catch (Exception e) {
	        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
	        response.setContentType("text/plain");
	        response.getWriter().write("Error al generar el informe: " + e.getMessage());
	    }
	}
}
