import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Desarrolladora } from 'src/app/models/desarrolladora';
import { DesarrolladoraService } from 'src/app/services/desarrolladora.service';

  /* Variable JQuery(Datatables */
  declare var $: any;

@Component({
  selector: 'app-lista-desarrolladoras',
  templateUrl: './lista-desarrolladoras.component.html',
  styleUrls: ['./lista-desarrolladoras.component.css']
})
export class ListaDesarrolladorasComponent {

  objDesarrolladora:Desarrolladora[];

  constructor(
    private serviDes:DesarrolladoraService,  
    private router:Router, 
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.obtenerDesarrolladoras();
  }

  private obtenerDesarrolladoras() {
    this.serviDes.obtenerDesarrolladoras().subscribe(dato => {
      this.objDesarrolladora = dato;
      this.showDatatable();
    });
  }

  eliminarDesarrolladora(id: number) {
    const confirmarEliminacion = confirm(`¿Estás seguro de que deseas eliminar la desarrolladora con ID: ${id} ?`);
  
    if (!confirmarEliminacion) {
      return;
    }
  
    if ($.fn.DataTable.isDataTable('#datatable-spanish')) {
      $('#datatable-spanish').DataTable().destroy();
    }
  
    this.serviDes.eliminarDesarrolladora(id).subscribe(dato => {
      this.obtenerDesarrolladoras();
    },
    error => {
      alert('No se puede eliminar la desarrolladora debido a que tiene una relación con otra tabla.');
    });
  }

  actualizarDesarrolladora(id:number) {
    this.router.navigate(['actualizar-desarrolladora', id]);
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
    this.serviDes.generarInformePDF().subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}
