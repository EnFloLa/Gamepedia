package com.proyecto.gamepedia.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_genero")
public class Genero {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cod_gen")
	private Integer codGen;

	@Column(name = "nom_gen")
	private String nomGen;

	@JsonIgnore
	@OneToMany(mappedBy = "juegoGenero")
	private List<Juego> listaJuegos;

	public Integer getCodGen() {
		return codGen;
	}

	public void setCodGen(Integer codGen) {
		this.codGen = codGen;
	}

	public String getNomGen() {
		return nomGen;
	}

	public void setNomGen(String nomGen) {
		this.nomGen = nomGen;
	}

	public List<Juego> getListaJuegos() {
		return listaJuegos;
	}

	public void setListaJuegos(List<Juego> listaJuegos) {
		this.listaJuegos = listaJuegos;
	}
}
