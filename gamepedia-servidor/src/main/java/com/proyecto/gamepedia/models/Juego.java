package com.proyecto.gamepedia.models;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "tb_juego")
public class Juego {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cod_jue")
	private Integer codJue;

	@Column(name = "tit_jue")
	private String titJue;

	@Column(name = "des_jue")
	private String desJue;

	@Column(name = "pre_jue")
	private BigDecimal preJue;

	@Temporal(TemporalType.DATE)
	@Column(name = "fec_lan_jue")
	private Date fecLanJue;
	
	@Column(name = "imagen")
	private String imagen;

	@ManyToOne
	@JoinColumn(name = "cod_gen")
	private Genero juegoGenero;

	@ManyToOne
	@JoinColumn(name = "cod_des")
	private Desarrolladora juegoDesarrolladora;
	
	@ManyToOne
	@JoinColumn(name = "cod_pla")
	private Plataforma juegoPlataforma;

	public Plataforma getJuegoPlataforma() {
		return juegoPlataforma;
	}

	public void setJuegoPlataforma(Plataforma juegoPlataforma) {
		this.juegoPlataforma = juegoPlataforma;
	}

	public Integer getCodJue() {
		return codJue;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public void setCodJue(Integer codJue) {
		this.codJue = codJue;
	}

	public String getTitJue() {
		return titJue;
	}

	public void setTitJue(String titJue) {
		this.titJue = titJue;
	}

	public String getDesJue() {
		return desJue;
	}

	public void setDesJue(String desJue) {
		this.desJue = desJue;
	}

	public BigDecimal getPreJue() {
		return preJue;
	}

	public void setPreJue(BigDecimal preJue) {
		this.preJue = preJue;
	}

	public Date getFecLanJue() {
		return fecLanJue;
	}

	public void setFecLanJue(Date fecLanJue) {
		this.fecLanJue = fecLanJue;
	}

	public Genero getJuegoGenero() {
		return juegoGenero;
	}

	public void setJuegoGenero(Genero juegoGenero) {
		this.juegoGenero = juegoGenero;
	}

	public Desarrolladora getJuegoDesarrolladora() {
		return juegoDesarrolladora;
	}

	public void setJuegoDesarrolladora(Desarrolladora juegoDesarrolladora) {
		this.juegoDesarrolladora = juegoDesarrolladora;
	}
}
