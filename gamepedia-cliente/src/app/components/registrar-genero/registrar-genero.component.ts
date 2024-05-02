import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-registrar-genero',
  templateUrl: './registrar-genero.component.html',
  styleUrls: ['./registrar-genero.component.css']
})
export class RegistrarGeneroComponent {

  objGenero: Genero = new Genero();

  // Constructor para inyectar servicios e inicializar el componente
  constructor(
    private serviGenero: GeneroService,
    private router: Router
  ) {}

  onSubmit() {
    this.guardarGenero();
  }

  guardarGenero() {
    this.serviGenero.grabarGenero(this.objGenero).subscribe(
      dato => {
        this.mostrarMensajeExito();
        this.irALaListaDeGeneros();
      },
      error => {
        console.error(error);
        this.mostrarMensajeError();
      }
    );
  }

  // Función para mostrar un mensaje de éxito
  mostrarMensajeExito() {
    alert(`¡El genero ${this.objGenero.nomGen} se ha registrado exitosamente!`);
  }
  
  // Función para mostrar un mensaje de error
  mostrarMensajeError() {
    alert('Ha ocurrido un error al registrar el genero.');
  }

  // Función para navegar a la lista 
  irALaListaDeGeneros() {
    this.router.navigate(['/generos']);
  }
}
