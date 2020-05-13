import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { FotosService } from 'src/app/services/fotos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public _infoPagServ: InfoPaginaService,
              public _fotos: FotosService ) { }

  ngOnInit(): void {
  }

}
