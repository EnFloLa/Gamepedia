import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/models/juego';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
// Define la clase "InicioComponent" y la implementa.
export class InicioComponent implements OnInit {

  // Declara una propiedad para almacenar un arreglo de juegos.
  objJuego: Juego[];
  title: string;

  // Constructor de la clase, recibe servicios y el enrutador.
  constructor(
    private serviJuego: JuegoService,
    private router: Router
  ) { }

  // Método que se ejecuta al inicializar el componente.
  ngOnInit(): void {
    // Llama a la función para obtener juegos cuando se inicia el componente.
    this.obtenerJuegos();
  }

  // Función privada para obtener juegos desde el servicio.
  private obtenerJuegos() {
    // Llama al método "obtenerJuegos" del servicio y suscribe a los datos.
    this.serviJuego.obtenerJuegos().subscribe(dato => {
      // Muestra los juegos en la consola para depuración.
      console.log("Juegos: ", dato);
      // Almacena los juegos en la propiedad "objJuego".
      this.objJuego = dato;
    });
  }

  // Función privada para buscar juegos por el titulo
  buscarJuegoPorTitulo() {
    this.serviJuego.buscarJuegoPorTitulo(this.title)
      .subscribe(
        juego => this.objJuego = juego,
        error => {
          console.error('Error:', error);
          this.objJuego = [];
        }
      );
  }

  // Función para ver los detalles de un juego por su ID.
  verDetalleJuego(id: number) {
    // Navega a la ruta 'ver-juego' con el ID como parámetro.
    this.router.navigate(['ver-detalle-juego', id]);
  }
}
