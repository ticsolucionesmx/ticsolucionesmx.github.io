import { Component, Input, OnInit } from '@angular/core';
import {aboutInterface, initAbout} from '../../interfaces/about.interface'
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public about: aboutInterface = initAbout;
  constructor () {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.about.AgeCalculo = this.CalculateAge()
  }
  CalculateAge(): number {
    if (this.about.edadcalculo) {
      let fechanacimiento   = Date.parse(this.about.edadcalculo);
      // console.log(fechanacimiento);
      let timeDiff = Math.abs(Date.now() - fechanacimiento);
      // console.log(timeDiff);
      return Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365);
    } else {
      return 0;
    }
  }

}
