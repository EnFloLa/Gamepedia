import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/models/juego';
import { JuegoService } from 'src/app/services/juego.service'; 

/* Variable JQuery(Datatables */
  declare var $: any;

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  // Declara la propiedad selectedJuego
  selectedJuego: any; 
  objJuego:Juego[];

  constructor(
    private serviJuego:JuegoService,  
    private router:Router, 
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.obtenerJuegos();
  }

  /* Metodo para el zoom de la imagen de la tabla de juegos */
  selectJuego(juego: any) {
    this.selectedJuego = juego;
  }

  private obtenerJuegos() {
    this.serviJuego.obtenerJuegos().subscribe(dato => {
      console.log("Juegos: ", dato);
      this.objJuego = dato;
      this.showDatatable();
    });
  }

  eliminarJuego(id: number) {
    const confirmarEliminacion = confirm(`¿Estás seguro de que deseas eliminar el juego con ID: ${id} ?`);
  
    if (!confirmarEliminacion) {
      return;
    }
  
    if ($.fn.DataTable.isDataTable('#datatable-spanish')) {
      $('#datatable-spanish').DataTable().destroy();
    }
  
    this.serviJuego.eliminarJuego(id).subscribe(dato => {
      console.log(dato);
      this.obtenerJuegos();
    });
  }

  actualizarJuego(id:number) {
    this.router.navigate(['actualizar-juego', id]);
  }

  showDatatable(){
      $(document).ready(function() {
        $('#datatable-spanish').DataTable({
            "aLengthMenu": [10, 25, 50, 100],
            "language": {
              "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
          }
        });
    });  
  }

  generarInforme() {
    this.serviJuego.generarInformePDF().subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

}
