import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { GeneroService } from 'src/app/services/genero.service';

/* Variable JQuery(Datatables */
  declare var $: any;

@Component({
  selector: 'app-lista-generos',
  templateUrl: './lista-generos.component.html',
  styleUrls: ['./lista-generos.component.css']
})
export class ListaGenerosComponent implements OnInit {

  objGenero:Genero[];

  constructor(
    private serviGenero:GeneroService,  
    private router:Router, 
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.obtenerGeneros();
  }

  private obtenerGeneros() {
    this.serviGenero.obtenerGeneros().subscribe(dato => {
      console.log("Datos: ", dato);
      this.objGenero = dato;
      this.showDatatable();
    });
  }

  eliminarGenero(id: number) {
    const confirmarEliminacion = confirm(`¿Estás seguro de que deseas eliminar el genero con ID: ${id} ?`);
  
    if (!confirmarEliminacion) {
      return;
    }
  
    if ($.fn.DataTable.isDataTable('#datatable-spanish')) {
      $('#datatable-spanish').DataTable().destroy();
    }
  
    this.serviGenero.eliminarGenero(id).subscribe(
      dato => {
        this.obtenerGeneros();
      },
      error => {
        alert('No se puede eliminar el genero debido a que tiene una relación con otra tabla.');
      });
  }

  actualizarGenero(id:number) {
    this.router.navigate(['actualizar-genero', id]);
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
    this.serviGenero.generarInformePDF().subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}
