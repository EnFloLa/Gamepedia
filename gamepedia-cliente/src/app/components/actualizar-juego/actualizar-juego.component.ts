import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Desarrolladora } from 'src/app/models/desarrolladora';
import { Genero } from 'src/app/models/genero';
import { Juego } from 'src/app/models/juego';
import { Plataforma } from 'src/app/models/plataforma';
import { DesarrolladoraService } from 'src/app/services/desarrolladora.service';
import { GeneroService } from 'src/app/services/genero.service';
import { JuegoService } from 'src/app/services/juego.service';
import { PlataformaService } from 'src/app/services/plataforma.service';

@Component({
  selector: 'app-actualizar-juego',
  templateUrl: './actualizar-juego.component.html',
  styleUrls: ['./actualizar-juego.component.css']
})
export class ActualizarJuegoComponent implements OnInit {

  id: number;
  objJuego: Juego = new Juego();
  objDesarrolladora: Desarrolladora[] = [];
  objGenero: Genero[] = [];
  objPlataforma: Plataforma[] = [];

  constructor(
    private serviJuego: JuegoService,
    private serviGenero: GeneroService,
    private serviDesarrolladora: DesarrolladoraService,
    private serviPlataforma: PlataformaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Al inicializar el componente, cargamos los detalles y obtenemos el ID de la ruta.
    this.cargarYSeleccionarJuegoXCod();
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    // Cuando se envía el formulario, llamamos a la función para actualizar el juego.
    this.actualizarJuego();
  }

  actualizarJuego() {
    // Llamamos al servicio para actualizar el juego.
    this.serviJuego.grabarJuego(this.objJuego).subscribe(
      dato => {
        // Si la actualización es exitosa, mostramos un mensaje de éxito y redirigimos.
        this.mostrarMensajeExito();
        this.irAlaListaDeJuegos();
      },
      error => {
        // Si hay un error en la actualización, mostramos un mensaje de error y lo registramos en la consola.
        console.log(error);
        this.mostrarMensajeError();
      }
    );
  }

  cargarYSeleccionarJuegoXCod() {
    // Cargamos las desarrolladoras desde el servicio.
    this.serviDesarrolladora.obtenerDesarrolladoras().subscribe(desarrolladora => {
      console.log("Desarrolladora", desarrolladora);
      this.objDesarrolladora = desarrolladora;

      // Cargamos los géneros desde el servicio.
      this.serviGenero.obtenerGeneros().subscribe(generos => {
        console.log("Generos", generos);
        this.objGenero = generos;

        this.serviPlataforma.obtenerPlataformas().subscribe(plataformas => {
          console.log("Plataformas", plataformas);
          this.objPlataforma = plataformas;

          // Obtenemos los detalles del juego por su ID.
          this.serviJuego.obtenerJuegoPorId(this.id).subscribe(
            juego => {
              this.objJuego = juego;

              // Si el juego y las desarrolladoras están cargadas, seleccionamos la desarrolladora correcta.
              if (this.objJuego && this.objDesarrolladora) {
                const desarrolladoraSeleccionado = this.objDesarrolladora.find(desarrolladora => desarrolladora.codDes === this.objJuego.juegoDesarrolladora.codDes);
                if (desarrolladoraSeleccionado) {
                  this.objJuego.juegoDesarrolladora = desarrolladoraSeleccionado;
                }
              }

              // Si el juego y los géneros están cargados, seleccionamos el género correcto.
              if (this.objJuego && this.objGenero) {
                const generoSeleccionado = this.objGenero.find(genero => genero.codGen === this.objJuego.juegoGenero.codGen);
                if (generoSeleccionado) {
                  this.objJuego.juegoGenero = generoSeleccionado;
                }
              }

              /* Seleccionar combo plataforma */
              if (this.objJuego && this.objPlataforma) {
                const plataformaSeleccionado = this.objPlataforma.find(plataforma => plataforma.codPla === this.objJuego.juegoPlataforma.codPla);
                if (plataformaSeleccionado) {
                  this.objJuego.juegoPlataforma = plataformaSeleccionado;
                }
              }
            },
            error => {
              // Si hay un error al obtener los detalles del juego, lo registramos en la consola.
              console.log(error);
            }
          );
        });
      });
    });
  }

  mostrarMensajeExito() {
    // Mostramos un mensaje de éxito cuando la actualización es exitosa.
    alert(`¡El juego ${this.objJuego.titJue} se ha actualizado exitosamente!`);
  }

  mostrarMensajeError() {
    // Mostramos un mensaje de error cuando hay un problema en la actualización.
    alert('Ha ocurrido un error al actualizar el juego.');
  }

  irAlaListaDeJuegos() {
    // Redirigimos al usuario a la lista de juegos después de la actualización.
    this.router.navigate(['/juegos']);
  }
}
