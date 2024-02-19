import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrincipalComponent implements OnInit{

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

  ngOnInit(){
  }
}
