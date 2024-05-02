import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-actualizar-genero',
  templateUrl: './actualizar-genero.component.html',
  styleUrls: ['./actualizar-genero.component.css']
})
export class ActualizarGeneroComponent implements OnInit {

  id: number;
  objGenero: Genero = new Genero();

  constructor(
    private serviGenero: GeneroService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.objGenero = new Genero();
    this.obtenerGeneroPorId(this.id);
  }

  onSubmit() {
    // Cuando se envía el formulario, llamamos a la función para actualizar.
    this.actualizarGenero();
  }

  private obtenerGeneroPorId(id: number): void {
    this.serviGenero.obtenerGeneroPorId(id).subscribe(dato => {
      this.objGenero = dato;
    });
  }

  actualizarGenero() {
    // Llamamos al servicio para actualizar.
    this.serviGenero.grabarGenero(this.objGenero).subscribe(
      dato => {
        // Si la actualización es exitosa, mostramos un mensaje de éxito y redirigimos.
        this.mostrarMensajeExito();
        this.irAlaListaDeGeneros();
      },
      error => {
        // Si hay un error en la actualización, mostramos un mensaje de error y lo registramos en la consola.
        console.log(error);
        this.mostrarMensajeError();
      }
    );
  }

  mostrarMensajeExito() {
    // Mostramos un mensaje de éxito cuando la actualización es exitosa.
    alert(`¡El genero ${this.objGenero.nomGen} se ha actualizado exitosamente!`);
  }

  mostrarMensajeError() {
    // Mostramos un mensaje de error cuando hay un problema en la actualización.
    alert('Ha ocurrido un error al actualizar el genero.');
  }

  irAlaListaDeGeneros() {
    // Redirigimos al usuario a la lista después de la actualización.
    this.router.navigate(['/generos']);
  }
}
