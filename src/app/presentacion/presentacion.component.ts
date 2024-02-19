import { Component, NgModule, OnInit } from '@angular/core';
import * as AOS from 'aos';
// js
import { PresentacionService } from '../services/presentacion.service';
// componentes
import { SwiperComponent } from 'swiper/angular'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller } from 'swiper';
import { BehaviorSubject } from "rxjs";
import Swiper from "swiper/types/swiper-class";
// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);


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
  About = 'Acerca de Mi';
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
    private _PresentacionService: PresentacionService
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


