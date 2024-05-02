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
@Table(name = "tb_desarrolladora")
public class Desarrolladora {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cod_des")
	private Integer codDes;

	@Column(name = "nom_des")
	private String nomDes;

	@JsonIgnore
	@OneToMany(mappedBy = "juegoDesarrolladora")
	private List<Juego> listaJuegos;

	public Integer getCodDes() {
		return codDes;
	}

	public void setCodDes(Integer codDes) {
		this.codDes = codDes;
	}

	public String getNomDes() {
		return nomDes;
	}

	public void setNomDes(String nomDes) {
		this.nomDes = nomDes;
	}

	public List<Juego> getListaJuegos() {
		return listaJuegos;
	}

	public void setListaJuegos(List<Juego> listaJuegos) {
		this.listaJuegos = listaJuegos;
	}
}
