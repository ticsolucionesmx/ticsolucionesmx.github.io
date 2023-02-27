import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ReactiveFormsModule } from '@angular/forms';

// importacion servicios
import { PresentacionService } from '../app/services/presentacion.service';
import { PrincipalComponent } from './principal/principal.component';
//fin  importacion servicios

@NgModule({
  declarations: [
    AppComponent,
      PresentacionComponent,
      PrincipalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PresentacionService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
