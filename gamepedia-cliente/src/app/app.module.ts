import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    ListaJuegosComponent,
    RegistrarJuegoComponent,
    ActualizarJuegoComponent,
    NoticiasComponent,
    JuegosOnlineComponent,
    InicioComponent,
    VerDetalleJuegoComponent,
    MenuAdministradorComponent,
    NosotrosComponent,
    ContactanosComponent,
    ListaGenerosComponent,
    ListaPlataformasComponent,
    ListaDesarrolladorasComponent,
    ActualizarGeneroComponent,
    RegistrarGeneroComponent,
    RegistrarDesarrolladoraComponent,
    ActualizarDesarrolladoraComponent,
    ActualizarPlataformaComponent,
    RegistrarPlataformaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // API connect and forms
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
