package com.proyecto.gamepedia.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gamepedia.models.Plataforma;
import com.proyecto.gamepedia.repositories.PlataformaRepository;

@Service
public class PlataformaService {
	
	@Autowired
	private PlataformaRepository repoPlataforma;
	
	public List<Plataforma> listado() {
		return repoPlataforma.findAll();
	}

	public Plataforma grabar(Plataforma plataforma) {
		return repoPlataforma.save(plataforma);
	}
	
	public Plataforma buscar(Integer cod) {
		return repoPlataforma.findById(cod).orElse(null);
	}
	
	public void eliminar(Integer cod) {
		repoPlataforma.deleteById(cod);
	}
}
