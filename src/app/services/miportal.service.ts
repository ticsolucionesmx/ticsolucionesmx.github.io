import { Injectable } from '@angular/core';
import { aboutInterface, initAbout } from '../interfaces/about.interface';

@Injectable({providedIn: 'root'})
export class MiPortalService {
  constructor() { }
  public about: aboutInterface = initAbout
}
