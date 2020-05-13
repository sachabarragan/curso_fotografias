import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoFotografos } from '../interfaces/info-fotografos.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  fotografos: InfoFotografos = {};
  cargado: boolean = false;

  constructor( private http: HttpClient) { 
       this.cargarInfo();
       this.cargarFotografos();

  }

  private cargarFotografos(){
    this.http.get('https://angular-fotografias.firebaseio.com/fotografos.json')
      .subscribe( (resp: InfoFotografos) => {
        this.fotografos = resp;
        this.cargado = true;
        // console.log(resp);
      });

      
  }

  private cargarInfo(){
    this.http.get('../../assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargado = true;
        this.info = resp;
        // console.log(resp);
      });

    
  }
}
