import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../models/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private baseURL = "http://localhost:8091/api/v1/juego"; // URL base para los servicios relacionados con juegos
  private baseURL2 = "http://localhost:8091/api/v1/menu-admin"; // URL base para los servicios relacionados con el menú de administración
  private baseURL3 = 'http://localhost:8091/api/v1/generar-pdf-juegos'; // URL base para la generación de PDF de juegos

  constructor(private httpClient: HttpClient) { }

  // Obtiene una lista de juegos
  obtenerJuegos(): Observable<Juego[]> {
    return this.httpClient.get<Juego[]>(`${this.baseURL}`);
  }

  // Guarda un juego en la base de datos
  grabarJuego(juego: Juego): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, juego);
  }

  // Obtiene un juego por su ID
  obtenerJuegoPorId(id: number): Observable<Juego> {
    return this.httpClient.get<Juego>(`${this.baseURL}/${id}`);
  }

  // Elimina un juego por su ID
  eliminarJuego(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // Busca juegos por título
  buscarJuegoPorTitulo(title: string): Observable<Juego[]> {
    return this.httpClient.get<Juego[]>(`${this.baseURL}/buscar?titulo=${title}`);
  }

  /* Contadores de entidades o registros */
  getMenuAdmin():Observable<any>{
    // Este método realiza una solicitud HTTP GET para obtener el menú de administrador.
    // Utiliza la URL base definida en `this.baseURL2`.
    return this.httpClient.get(`${this.baseURL2}`);
  }

  /* Genera Informe PDF */
  generarInformePDF(): Observable<Blob> {
    return this.httpClient.get(this.baseURL3, { responseType: 'blob' });
  }
}
