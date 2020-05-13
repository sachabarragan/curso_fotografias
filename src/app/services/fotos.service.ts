import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoFotos } from '../interfaces/info-fotos.interfase';
import { InfoFotosIdx } from '../interfaces/info-fotosIdx.interface';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  fotos: InfoFotos[] = [];
  fotosIdx: InfoFotosIdx[] = [];
  cargado: boolean = false;

  constructor(private http: HttpClient ) { 
    this.cargarFotos();
    this.cargarFotosIdx();
  }

  private cargarFotos(){
    this.http.get('https://angular-fotografias.firebaseio.com/fotos.json')
      .subscribe( (resp: InfoFotos[]) => {
        
        this.fotos = resp;
        this.cargado = false;
        
      });
  }

  private cargarFotosIdx(){
    this.http.get('https://angular-fotografias.firebaseio.com/fotos_idx.json')
      .subscribe( (resp: InfoFotosIdx[]) => {
        
        this.fotosIdx = resp;
        this.cargado = false;
        
      });
  }

  getFoto( id: string ){
    return this.http.get(`https://angular-fotografias.firebaseio.com/fotos/${id}.json`);
  }
}
