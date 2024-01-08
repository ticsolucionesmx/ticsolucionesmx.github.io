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

}
