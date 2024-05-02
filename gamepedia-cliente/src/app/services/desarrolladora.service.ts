import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desarrolladora } from '../models/desarrolladora';

@Injectable({
  providedIn: 'root'
})
export class DesarrolladoraService {

  private baseURL = "http://localhost:8091/api/v1/desarrolladora";
  private baseURL2 = 'http://localhost:8091/api/v1/generar-pdf-desarrolladoras';

  constructor(private httpClient : HttpClient) { }

  obtenerDesarrolladoras():Observable<Desarrolladora[]>{
    return this.httpClient.get<Desarrolladora[]>(`${this.baseURL}`);
  }

  grabarDesarrolladora(desarrolladora:Desarrolladora) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, desarrolladora);
  }

  obtenerDesarrolladoraPorId(id:number) : Observable<Desarrolladora>{
    return this.httpClient.get<Desarrolladora>(`${this.baseURL}/${id}`);
  }

  eliminarDesarrolladora(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  generarInformePDF(): Observable<Blob> {
    return this.httpClient.get(this.baseURL2, { responseType: 'blob' });
  }
}
