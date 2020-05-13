import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  constructor( public _infoFotServ: InfoPaginaService ) { }

  ngOnInit(): void {
    console.log(this._infoFotServ);
  }

}
