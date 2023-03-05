import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { PresentacionService } from '../services/presentacion.service';
import * as confetti from 'canvas-confetti';


@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent implements OnInit {
  public clicked = false;
  imagenes = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11","img12","img13","img14" ];
  constructor(
    private _PresentacionService: PresentacionService,
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) {
    _PresentacionService.cargarjs(['cumple']);

  }

  ngOnInit() {
    // this.surprise();
  }

  public surprise(): void {

    const canvas = this.renderer2.createElement('canvas');
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);

    const myConfetti = confetti.create(canvas, {
      resize: true
    });

    myConfetti();
    this.clicked = true;
  }
}
