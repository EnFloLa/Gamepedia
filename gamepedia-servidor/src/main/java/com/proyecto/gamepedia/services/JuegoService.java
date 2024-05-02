package com.proyecto.gamepedia.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gamepedia.models.Juego;
import com.proyecto.gamepedia.repositories.JuegoRepository;

@Service
public class JuegoService {

	@Autowired
	private JuegoRepository repoJuego;

	// Método que devuelve una lista de todos los juegos
	public List<Juego> listado() {
		return repoJuego.findAll();
	}

	// Método que guarda y actualiza un juego en la base de datos
	public Juego grabar(Juego juego) {
		return repoJuego.save(juego);
	}

	// Método que busca un juego por su código y lo devuelve, o null si no se
	// encuentra
	public Juego buscar(Integer cod) {
		return repoJuego.findById(cod).orElse(null);
	}

	// Método que elimina un juego por su código
	public void eliminar(Integer cod) {
		repoJuego.deleteById(cod);
	}

	// Método que busca juegos por título, ignorando mayúsculas y minúsculas
	public List<Juego> buscarJuegoPorTitulo(String titulo) {
		return repoJuego.findByTitJueContainingIgnoreCase(titulo);
	}
}
