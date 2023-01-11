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
  constructor(
    private _PresentacionService:PresentacionService
  ) {
    _PresentacionService.cargarjs(['principal']);
  }


  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh)
  }

}
