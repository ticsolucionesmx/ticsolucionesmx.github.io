import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
  _Brithday = "23 de Marzo"
  Website = 'Website';
  _Website = 'ticsolucionesmx.github.io';
  Phone = 'Telefono';
  _Phone = '951 350 62 72';
  City = 'Ciudad';
  _mail = 'joseramirez.jr2303@gmail.com';
  Age = 'Edad';
  edadcalculo = '23/03/1991';
  constructor () {}

}
