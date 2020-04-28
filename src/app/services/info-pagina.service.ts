import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  cargado: boolean = false;

  constructor( private http: HttpClient) { 
    console.log("Que onda mira donde entro"); 

    this.http.get('../../assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargado = true;
        this.info = resp;
        console.log(resp);
      });

  }
}
