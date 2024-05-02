import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plataforma } from '../models/plataforma';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  private baseURL = "http://localhost:8091/api/v1/plataforma";
  private baseURL2 = 'http://localhost:8091/api/v1/generar-pdf-plataformas';

  constructor(private httpClient : HttpClient) { }

  obtenerPlataformas():Observable<Plataforma[]>{
    return this.httpClient.get<Plataforma[]>(`${this.baseURL}`);
  }

  grabarPlataforma(plataforma:Plataforma) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, plataforma);
  }

  obtenerPlataformaPorId(id:number) : Observable<Plataforma>{
    return this.httpClient.get<Plataforma>(`${this.baseURL}/${id}`);
  }

  eliminarPlataforma(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  generarInformePDF(): Observable<Blob> {
    return this.httpClient.get(this.baseURL2, { responseType: 'blob' });
  }
}
