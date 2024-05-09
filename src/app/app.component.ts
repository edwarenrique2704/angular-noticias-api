import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularNoticias';

  listNoticias: any[] = [];

  constructor(private noticiaService: NoticiaService){
    
  }

  buscarNoticias(parametros:any){
    console.log(parametros);

    this.noticiaService.getNoticias(parametros).subscribe(data =>{
      console.log(data);
      this.listNoticias = data.articles;
      
      
    }, error =>{
      console.log(error);
    })
  }
}
