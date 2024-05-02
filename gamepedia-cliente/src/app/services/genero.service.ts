import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private baseURL = "http://localhost:8091/api/v1/genero";
  private baseURL2 = 'http://localhost:8091/api/v1/generar-pdf-generos';

  constructor(private httpClient : HttpClient) { }

  obtenerGeneros():Observable<Genero[]>{
    return this.httpClient.get<Genero[]>(`${this.baseURL}`);
  }

  grabarGenero(genero:Genero) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, genero);
  }

  obtenerGeneroPorId(id:number) : Observable<Genero>{
    return this.httpClient.get<Genero>(`${this.baseURL}/${id}`);
  }

  eliminarGenero(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  generarInformePDF(): Observable<Blob> {
    return this.httpClient.get(this.baseURL2, { responseType: 'blob' });
  }
}
