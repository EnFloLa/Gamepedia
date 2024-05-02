package com.proyecto.gamepedia.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gamepedia.models.Desarrolladora;
import com.proyecto.gamepedia.repositories.DesarrolladoraRepository;

@Service
public class DesarrolladoraService {

	@Autowired
	private DesarrolladoraRepository repoDesarrolladora;

	public List<Desarrolladora> listado() {
		return repoDesarrolladora.findAll();
	}

	public Desarrolladora grabar(Desarrolladora desarrolladora) {
		return repoDesarrolladora.save(desarrolladora);
	}

	public Desarrolladora buscar(Integer cod) {
		return repoDesarrolladora.findById(cod).orElse(null);
	}

	public void eliminar(Integer cod) {
		repoDesarrolladora.deleteById(cod);
	}
}
