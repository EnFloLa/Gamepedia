import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJuegosComponent } from './components/lista-juegos/lista-juegos.component';
import { RegistrarJuegoComponent } from './components/registrar-juego/registrar-juego.component';
import { ActualizarJuegoComponent } from './components/actualizar-juego/actualizar-juego.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { JuegosOnlineComponent } from './components/juegos-online/juegos-online.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VerDetalleJuegoComponent } from './components/ver-detalle-juego/ver-detalle-juego.component';
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { ListaGenerosComponent } from './components/lista-generos/lista-generos.component';
import { ListaPlataformasComponent } from './components/lista-plataformas/lista-plataformas.component';
import { ListaDesarrolladorasComponent } from './components/lista-desarrolladoras/lista-desarrolladoras.component';
import { ActualizarGeneroComponent } from './components/actualizar-genero/actualizar-genero.component';
import { RegistrarGeneroComponent } from './components/registrar-genero/registrar-genero.component';
import { RegistrarDesarrolladoraComponent } from './components/registrar-desarrolladora/registrar-desarrolladora.component';
import { ActualizarDesarrolladoraComponent } from './components/actualizar-desarrolladora/actualizar-desarrolladora.component';
import { ActualizarPlataformaComponent } from './components/actualizar-plataforma/actualizar-plataforma.component';
import { RegistrarPlataformaComponent } from './components/registrar-plataforma/registrar-plataforma.component';

const routes: Routes = [
  {path: '',redirectTo:'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'juegos', component: ListaJuegosComponent},
  {path: 'registrar-juego', component: RegistrarJuegoComponent},
  {path: 'actualizar-juego/:id', component: ActualizarJuegoComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'juegos-online', component: JuegosOnlineComponent},
  {path: 'ver-detalle-juego/:id', component: VerDetalleJuegoComponent},
  {path: 'menu-admin', component: MenuAdministradorComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'generos', component: ListaGenerosComponent},
  {path: 'desarrolladoras', component: ListaDesarrolladorasComponent},
  {path: 'plataformas', component: ListaPlataformasComponent},
  {path: 'actualizar-genero/:id', component: ActualizarGeneroComponent},
  {path: 'actualizar-desarrolladora/:id', component: ActualizarDesarrolladoraComponent},
  {path: 'actualizar-plataforma/:id', component: ActualizarPlataformaComponent},
  {path: 'registrar-genero', component: RegistrarGeneroComponent},
  {path: 'registrar-desarrolladora', component: RegistrarDesarrolladoraComponent},
  {path: 'registrar-plataforma', component: RegistrarPlataformaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
