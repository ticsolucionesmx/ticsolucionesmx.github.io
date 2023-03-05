import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
    @Input() Services : any
    constructor () {}
}
