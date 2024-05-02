package com.proyecto.gamepedia.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.gamepedia.models.Juego;

public interface JuegoRepository extends JpaRepository<Juego, Integer> {
	/* buscar juego por el titulo JPA ignorando Mayusculas y Minusculas */
	List<Juego> findByTitJueContainingIgnoreCase(String titulo);
}
