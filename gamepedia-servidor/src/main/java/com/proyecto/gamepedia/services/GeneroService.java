package com.proyecto.gamepedia.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gamepedia.models.Genero;
import com.proyecto.gamepedia.repositories.GeneroRepository;

@Service
public class GeneroService {

    @Autowired
    private GeneroRepository repoGenero;

    // Método para obtener un listado de géneros
    public List<Genero> listado() {
        return repoGenero.findAll();
    }

    // Método para grabar un género en la base de datos
    public Genero grabar(Genero genero) {
        return repoGenero.save(genero);
    }

    // Método para buscar un género por su código
    public Genero buscar(Integer cod) {
        return repoGenero.findById(cod).orElse(null);
    }

    // Método para eliminar un género por su código
    public void eliminar(Integer cod) {
        repoGenero.deleteById(cod);
    }
}
