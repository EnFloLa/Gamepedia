import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  nroJuegos: number; // Variable para almacenar el número de juegos
  nroDesarrolladoras: number; // Variable para almacenar el número de desarrolladoras
  nroGeneros: number; // Variable para almacenar el número de géneros
  nroPlataformas: number; // Variable para almacenar el número de plataformas

  constructor(private serviJuego: JuegoService) { }

  ngOnInit(): void {
    this.mostrarContadores(); // Llama a la función mostrarContadores() al inicializar el componente
  }

  mostrarContadores() {
    // Utiliza el servicio JuegoService para obtener datos del menú de administrador
    this.serviJuego.getMenuAdmin().subscribe(data => {
      // Asigna los valores obtenidos a las variables correspondientes
      this.nroJuegos = data.Juegos;
      this.nroDesarrolladoras = data.Desarrolladoras;
      this.nroGeneros = data.Generos;
      this.nroPlataformas = data.Plataformas;
    });
  }
}

