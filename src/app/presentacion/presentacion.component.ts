import { Component, OnInit } from '@angular/core';
import  * as AOS from 'aos';

// js
import { PresentacionService } from '../services/presentacion.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  page = 'Presentacion';
  nombre = 'Jose Antonio';
  // datos navegador
  home = 'inicio';
  About = 'Hacerca de Mi';
  Resume = 'Resumen';
  Portfolio = 'Portafolio';
  Services = 'Servicios';
  Contact = 'Contacto';
  // datos de contenido
  Skills = 'Habilidades';
  // hacerca de mi
  Birthday = 'Cumpleaños';
  Website = 'Website';
  Phone = 'Telefono';
  City = 'Ciudad';
  Age = 'Edad';
  edadcalculo = '23/03/1991';
  edadcalculada = this.CalculateAge();

  constructor(
    private _PresentacionService:PresentacionService
  ) {
    _PresentacionService.cargarjs(['principal']);
  }


  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    console.log(this.edadcalculada);
  }

  // funciones
  CalculateAge(): number {
    if (this.edadcalculo) {
        let timeDiff = Math.abs(Date.now() - <any>this.edadcalculo);
        return Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365);
    } else {
        return 0;
    }
}

}


