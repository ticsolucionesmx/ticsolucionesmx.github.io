import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    @Input() home : any
    @Input() About : any
    @Input() Resume :  any
    @Input() Portfolio : any
    @Input() Services : any
    @Input() Contact : any
    // datos navegador
    // home = 'inicio';
    // About = 'Hacerca de Mi';
    // Resume = 'Resumen';
    // Portfolio = 'Portafolio';
    // Services = 'Servicios';
    // Contact = 'Contacto';
    constructor () {}
}
