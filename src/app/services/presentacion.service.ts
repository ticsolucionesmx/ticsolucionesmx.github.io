import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PresentacionService {

constructor() { }

cargarjs(archivos:string[]){
  for(let archivo of archivos){

    let scrip = document.createElement('script');
    scrip.src = "../../assets/js/"+archivo+".js"
    let body = document.getElementsByTagName("body")[0];
    body.appendChild( scrip );
  }
}

}
