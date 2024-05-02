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
@Table(name = "tb_plataforma")
public class Plataforma {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cod_pla")
	private Integer codPla;

	@Column(name = "plataforma")
	private String plataforma;

	@JsonIgnore
	@OneToMany(mappedBy = "juegoPlataforma")
	private List<Juego> listaJuegos;

	public Integer getCodPla() {
		return codPla;
	}

	public void setCodPla(Integer codPla) {
		this.codPla = codPla;
	}

	public String getPlataforma() {
		return plataforma;
	}

	public void setPlataforma(String plataforma) {
		this.plataforma = plataforma;
	}

	public List<Juego> getListaJuegos() {
		return listaJuegos;
	}

	public void setListaJuegos(List<Juego> listaJuegos) {
		this.listaJuegos = listaJuegos;
	}
}
