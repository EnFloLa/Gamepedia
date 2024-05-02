import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from 'src/app/models/juego';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-ver-detalle-juego',
  templateUrl: './ver-detalle-juego.component.html',
  styleUrls: ['./ver-detalle-juego.component.css']
})
export class VerDetalleJuegoComponent {

  id: number;
  objJuego: Juego;

  constructor(
    private route: ActivatedRoute,
    private serviJuego: JuegoService,
  ) { }

  ngOnInit(): void {
    // Obtener el 'id' de los parámetros de la ruta actual
    this.id = this.route.snapshot.params['id'];
    
    // Inicializar 'objJuego' como una instancia vacía de la clase Juego
    this.objJuego = new Juego();

    // Llamar al método privado para obtener el juego por ID
    this.obtenerJuegoPorId(this.id);
  }

  // Método privado para obtener el juego por ID
  private obtenerJuegoPorId(id: number): void {
    this.serviJuego.obtenerJuegoPorId(id).subscribe(dato => {
      console.log("Juego según ID: ", dato);
      this.objJuego = dato;
    });
  }
}
