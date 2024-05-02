import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plataforma } from 'src/app/models/plataforma';
import { PlataformaService } from 'src/app/services/plataforma.service';

/* Variable JQuery(Datatables */
  declare var $: any;

@Component({
  selector: 'app-lista-plataformas',
  templateUrl: './lista-plataformas.component.html',
  styleUrls: ['./lista-plataformas.component.css']
})
export class ListaPlataformasComponent {

  objPlataforma:Plataforma[];

  constructor(
    private serviPlatarforma:PlataformaService,  
    private router:Router, 
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.obtenerPlataformas();
  }

  private obtenerPlataformas() {
    this.serviPlatarforma.obtenerPlataformas().subscribe(dato => {
      this.objPlataforma = dato;
      this.showDatatable();
    });
  }

  eliminarPlataforma(id: number) {
    const confirmarEliminacion = confirm(`¿Estás seguro de que deseas eliminar la plataforma con ID: ${id} ?`);
  
    if (!confirmarEliminacion) {
      return;
    }
  
    if ($.fn.DataTable.isDataTable('#datatable-spanish')) {
      $('#datatable-spanish').DataTable().destroy();
    }
  
    this.serviPlatarforma.eliminarPlataforma(id).subscribe(
      dato => {
        this.obtenerPlataformas();
      },
      error => {
        console.error('Error al eliminar la plataforma:', error);
        alert('No se puede eliminar la plataforma debido a que tiene una relación con otra tabla.');
      });
  }

  actualizarPlataforma(id:number) {
    this.router.navigate(['actualizar-plataforma', id]);
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
    this.serviPlatarforma.generarInformePDF().subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}
