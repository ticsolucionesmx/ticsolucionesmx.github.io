import { Component, OnInit } from '@angular/core';
import { PresentacionService } from '../services/presentacion.service';

@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent implements OnInit {
  constructor(
    private _PresentacionService: PresentacionService
  ) {
    _PresentacionService.cargarjs(['cumple']);
  }

  ngOnInit() {
  }

}
