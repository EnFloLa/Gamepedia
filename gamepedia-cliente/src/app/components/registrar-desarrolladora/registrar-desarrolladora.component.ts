import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Desarrolladora } from 'src/app/models/desarrolladora';
import { DesarrolladoraService } from 'src/app/services/desarrolladora.service';

@Component({
  selector: 'app-registrar-desarrolladora',
  templateUrl: './registrar-desarrolladora.component.html',
  styleUrls: ['./registrar-desarrolladora.component.css']
})
export class RegistrarDesarrolladoraComponent {

  objDesarrolladora: Desarrolladora = new Desarrolladora();

  // Constructor para inyectar servicios e inicializar el componente
  constructor(
    private serviDes: DesarrolladoraService,
    private router: Router
  ) {}

  onSubmit() {
    this.guardarDesarrolladora();
  }

  guardarDesarrolladora() {
    this.serviDes.grabarDesarrolladora(this.objDesarrolladora).subscribe(
      dato => {
        this.mostrarMensajeExito();
        this.irALaListaDeDesarrolladoras();
      },
      error => {
        console.error(error);
        this.mostrarMensajeError();
      }
    );
  }

  // Función para mostrar un mensaje de éxito
  mostrarMensajeExito() {
    alert(`La desarrolladora ${this.objDesarrolladora.nomDes} se ha registrado exitosamente!`);
  }
  
  // Función para mostrar un mensaje de error
  mostrarMensajeError() {
    alert('Ha ocurrido un error al registrar la desarrolladora.');
  }

  // Función para navegar a la lista 
  irALaListaDeDesarrolladoras() {
    this.router.navigate(['/desarrolladoras']);
  }
}
