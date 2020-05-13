import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { FotosService } from './services/fotos.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _infoPaginaService: InfoPaginaService,
                public _fotos: FotosService ){

  }
}
