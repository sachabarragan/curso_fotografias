import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotosService } from '../../../services/fotos.service';
import { InfoFotos } from '../../../interfaces/info-fotos.interfase';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  fotin: InfoFotos;

  constructor( private route: ActivatedRoute,
              public fotoService: FotosService ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe( parametros => {
      console.log(parametros['id'])

      this.fotoService.getFoto(parametros['id'])
        .subscribe( (foto: InfoFotos) => {
          console.log(foto);
          this.fotin = foto;
      });
    });
  }

}
