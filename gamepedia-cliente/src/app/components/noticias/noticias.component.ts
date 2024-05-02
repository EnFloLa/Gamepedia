import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  // Definir propiedades para almacenar datos de noticias
  sources: any[] = [];
  articles: any[] = [];

  constructor(private newsApiService: NoticiasService) { }

  ngOnInit(): void {
    // Llamar al método initSources para obtener fuentes de noticias al iniciar el componente
    this.newsApiService.initSources().subscribe((data: any) => {
      this.sources = data.sources;
    });

    // Llamar al método initArticles para obtener los titulares de noticias al iniciar el componente
    this.newsApiService.initArticles().subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  // Método para obtener artículos por ID de fuente
  getArticlesBySource(source: string) {
    this.newsApiService.getArticlesByID(source).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }
}
