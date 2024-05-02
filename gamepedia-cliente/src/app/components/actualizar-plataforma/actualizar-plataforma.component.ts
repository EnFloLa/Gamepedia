import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plataforma } from 'src/app/models/plataforma';
import { PlataformaService } from 'src/app/services/plataforma.service';

@Component({
  selector: 'app-actualizar-plataforma',
  templateUrl: './actualizar-plataforma.component.html',
  styleUrls: ['./actualizar-plataforma.component.css']
})
export class ActualizarPlataformaComponent implements OnInit {

  id: number;
  objPlataforma: Plataforma = new Plataforma();

  constructor(
    private serviPlataforma: PlataformaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.objPlataforma = new Plataforma();
    this.obtenerPlataformaPorId(this.id);
  }

  onSubmit() {
    // Cuando se envía el formulario, llamamos a la función para actualizar.
    this.actualizarPlataforma();
  }

  private obtenerPlataformaPorId(id: number): void {
    this.serviPlataforma.obtenerPlataformaPorId(id).subscribe(dato => {
      this.objPlataforma = dato;
    });
  }

  actualizarPlataforma() {
    // Llamamos al servicio para actualizar.
    this.serviPlataforma.grabarPlataforma(this.objPlataforma).subscribe(
      dato => {
        // Si la actualización es exitosa, mostramos un mensaje de éxito y redirigimos.
        this.mostrarMensajeExito();
        this.irAlaListaDePlataformas();
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
    alert(`!La plataforma ${this.objPlataforma.plataforma} se ha actualizado exitosamente!`);
  }

  mostrarMensajeError() {
    // Mostramos un mensaje de error cuando hay un problema en la actualización.
    alert('Ha ocurrido un error al actualizar la plataforma.');
  }
  
  irAlaListaDePlataformas() {
    // Redirigimos al usuario a la lista después de la actualización.
    this.router.navigate(['/plataformas']);
  }
}
