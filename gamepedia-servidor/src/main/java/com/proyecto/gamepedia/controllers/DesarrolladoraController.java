package com.proyecto.gamepedia.controllers;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.gamepedia.models.Desarrolladora;
import com.proyecto.gamepedia.services.DesarrolladoraService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class DesarrolladoraController {

	@Autowired
	private DesarrolladoraService serviDesarrolladora;

	@GetMapping("/desarrolladora")
	public ResponseEntity<List<Desarrolladora>> listadoDesarrolladoras() {
		return ResponseEntity.ok(serviDesarrolladora.listado());
	}
	
	@PostMapping("/desarrolladora")
	public ResponseEntity<Desarrolladora> grabarDesarrolladora(@RequestBody Desarrolladora desarrolladora) {
		return ResponseEntity.ok(serviDesarrolladora.grabar(desarrolladora));
	}
	
	@GetMapping("/desarrolladora/{id}")
	public ResponseEntity<Desarrolladora> buscarDesarrolladoraPorId(@PathVariable Integer id) {
		Desarrolladora desarrolladora = serviDesarrolladora.buscar(id);
		return ResponseEntity.ok(desarrolladora);
	}
	
	@DeleteMapping("/desarrolladora/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarDesarrolladora(@PathVariable Integer id) {
		serviDesarrolladora.eliminar(id);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
	
	/* Generar Reporte PDF con PDF-BOX */
	@GetMapping("/generar-pdf-desarrolladoras")
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
	        contentStream.showText("Reporte Desarrolladoras");
	        contentStream.endText();

	        // Obtén datos de la clase Juego
	        List<Desarrolladora> listaDesarrolladoras = serviDesarrolladora.listado();

	        // Definir el ancho de columna y el espacio entre celdas
	        float margin = 50;
	        float yStart = page.getMediaBox().getHeight() - margin;
	        float tableWidth = page.getMediaBox().getWidth() - 2 * margin;
	        float yPosition = yStart;
	        // float yPositionNewPage = 0;
	        int rows = listaDesarrolladoras.size() + 1;
	        int cols = 2;

	        float rowHeight = 20f;
	        float tableHeight = rowHeight * rows;
	        float tableYBottom = yStart - tableHeight;

	        // Encabezados de la tabla
	        float tableX = margin;
	        float nextY = yStart;
	        String[] columnHeaders = {"Cod", "Desarrolladoras"};
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
	        for (Desarrolladora desarrolladora : listaDesarrolladoras) {
	            float xPosition = margin;
	            String[] rowData = {
	            		desarrolladora.getCodDes().toString() != null ? desarrolladora.getCodDes().toString() : "",
	            		desarrolladora.getNomDes() != null ? desarrolladora.getNomDes() : ""
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
