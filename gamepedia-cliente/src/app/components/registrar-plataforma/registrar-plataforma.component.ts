import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plataforma } from 'src/app/models/plataforma';
import { PlataformaService } from 'src/app/services/plataforma.service';

@Component({
  selector: 'app-registrar-plataforma',
  templateUrl: './registrar-plataforma.component.html',
  styleUrls: ['./registrar-plataforma.component.css']
})
export class RegistrarPlataformaComponent {

  objPlataforma: Plataforma = new Plataforma();

  // Constructor para inyectar servicios e inicializar el componente
  constructor(
    private serviPlataforma: PlataformaService,
    private router: Router
  ) {}

  onSubmit() {
    this.guardarPlataforma();
  }

  guardarPlataforma() {
    this.serviPlataforma.grabarPlataforma(this.objPlataforma).subscribe(
      dato => {
        this.mostrarMensajeExito();
        this.irALaListaDePlataformas();
      },
      error => {
        console.error(error);
        this.mostrarMensajeError();
      }
    );
  }

  // Función para mostrar un mensaje de éxito
  mostrarMensajeExito() {
    alert(`!La plataforma ${this.objPlataforma.plataforma} se ha registrado exitosamente!`);
  }
  
  // Función para mostrar un mensaje de error
  mostrarMensajeError() {
    alert('Ha ocurrido un error al registrar la plataforma.');
  }

  // Función para navegar a la lista 
  irALaListaDePlataformas() {
    this.router.navigate(['/plataformas']);
  }
}
