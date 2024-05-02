package com.proyecto.gamepedia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.gamepedia.models.Genero;

public interface GeneroRepository extends JpaRepository<Genero, Integer> {

}
