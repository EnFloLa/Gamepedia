import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // Clave de la API
  api_key = '650f160e9c7944d3b1b56243e61f360b';

  constructor(private http: HttpClient) { }

  // Inicializa fuentes en inglés
  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }

  /* Inicializa artículos en inglés */
  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=' + this.api_key);
  }

  // artículos en español
  /* 
  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=' + this.api_key);
  }*/

  // Obtiene artículos por ID de fuente
  getArticlesByID(source: string) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&language=en&apiKey=' + this.api_key);
  }
}


