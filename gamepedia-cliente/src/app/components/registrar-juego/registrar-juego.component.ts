import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Desarrolladora } from 'src/app/models/desarrolladora';
import { Genero } from 'src/app/models/genero';
import { Juego } from 'src/app/models/juego';
import { Plataforma } from 'src/app/models/plataforma';
import { DesarrolladoraService } from 'src/app/services/desarrolladora.service';
import { GeneroService } from 'src/app/services/genero.service';
import { JuegoService } from 'src/app/services/juego.service';
import { PlataformaService } from 'src/app/services/plataforma.service';

@Component({
  selector: 'app-registrar-juego',
  templateUrl: './registrar-juego.component.html',
  styleUrls: ['./registrar-juego.component.css']
})
// Definir el componente
export class RegistrarJuegoComponent implements OnInit {

  objJuego: Juego = new Juego(); // Inicializar una instancia de la clase Juego
  objDesarrolladora: Desarrolladora[] = []; // Inicializar un arreglo para Desarrolladora
  objGenero: Genero[] = []; // Inicializar un arreglo para Genero
  objPlataforma: Plataforma[] = []; // Inicializar un arreglo para Plataforma

  // Constructor para inyectar servicios e inicializar el componente
  constructor(
    private serviJuego: JuegoService, 
    private serviGenero: GeneroService,
    private serviDesarrolladora: DesarrolladoraService,
    private serviPlataforma: PlataformaService,
    private router: Router
  ) {
    // this.objJuego.codJue = 0;
  }

  ngOnInit(): void {
    // Cargar datos cuando se inicializa el componente
    this.cargarGeneros();
    this.cargarDesarrolladoras();
    this.cargarPlataformas();
  }

  // Función para manejar la presentación del formulario
  handleSubmit() {
    this.guardarJuego();
  }

  // Función para guardar un nuevo Juego
  guardarJuego() {
    this.serviJuego.grabarJuego(this.objJuego).subscribe(
      dato => {
        console.log(dato);
        this.mostrarMensajeExito();
        this.irALaListaDeJuegos();
      },
      error => {
        console.error(error);
        this.mostrarMensajeError();
      }
    );
  }

  // Función para cargar datos de Genero desde el servicio
  cargarGeneros() {
    this.serviGenero.obtenerGeneros().subscribe(dato => {
      console.log("Generos", dato);
      this.objGenero = dato;
    });
  }

  // Función para cargar datos de Desarrolladora desde el servicio
  cargarDesarrolladoras() {
    this.serviDesarrolladora.obtenerDesarrolladoras().subscribe(dato => {
      this.objDesarrolladora = dato;
    });
  }

  // Función para cargar datos de Plataforma desde el servicio
  cargarPlataformas() {
    this.serviPlataforma.obtenerPlataformas().subscribe(dato => {
      this.objPlataforma = dato;
    });
  }

  // Función para mostrar un mensaje de éxito
  mostrarMensajeExito() {
    alert(`¡El juego ${this.objJuego.titJue} se ha registrado exitosamente!`);
  }
  
  // Función para mostrar un mensaje de error
  mostrarMensajeError() {
    alert('Ha ocurrido un error al registrar el juego.');
  }

  // Función para navegar a la lista de Juegos
  irALaListaDeJuegos() {
    this.router.navigate(['/juegos']);
  }
}
