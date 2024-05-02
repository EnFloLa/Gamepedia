import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Desarrolladora } from 'src/app/models/desarrolladora';
import { DesarrolladoraService } from 'src/app/services/desarrolladora.service';

@Component({
  selector: 'app-actualizar-desarrolladora',
  templateUrl: './actualizar-desarrolladora.component.html',
  styleUrls: ['./actualizar-desarrolladora.component.css']
})
export class ActualizarDesarrolladoraComponent implements OnInit {

  id: number;
  objDes: Desarrolladora = new Desarrolladora();

  constructor(
    private serviDes: DesarrolladoraService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.objDes = new Desarrolladora();
    this.obtenerDesarrolladoraPorId(this.id);
  }

  onSubmit() {
    // Cuando se envía el formulario, llamamos a la función para actualizar el juego.
    this.actualizarDesarrolladora();
  }

  private obtenerDesarrolladoraPorId(id: number): void {
    this.serviDes.obtenerDesarrolladoraPorId(id).subscribe(dato => {
      this.objDes = dato;
    });
  }

  actualizarDesarrolladora() {
    // Llamamos al servicio para actualizar.
    this.serviDes.grabarDesarrolladora(this.objDes).subscribe(
      dato => {
        // Si la actualización es exitosa, mostramos un mensaje de éxito y redirigimos.
        this.mostrarMensajeExito();
        this.irAlaListaDeDesarrolladoras();
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
    alert(`!La desarrolladora ${this.objDes.nomDes} se ha actualizado exitosamente!`);
  }

  mostrarMensajeError() {
    // Mostramos un mensaje de error cuando hay un problema en la actualización.
    alert('Ha ocurrido un error al actualizar la desarrolladora.');
  }

  irAlaListaDeDesarrolladoras() {
    // Redirigimos al usuario a la lista después de la actualización.
    this.router.navigate(['/desarrolladoras']);
  }
}
