import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

// importacion servicios
import { PresentacionService } from '../app/services/presentacion.service';
//fin  importacion servicios

// componenentes
import { PresentacionComponent } from './presentacion/presentacion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AboutComponent } from './components/about/about.component';
// import { FactsComponent } from './components/facts/facts.component';
// import { SkillsComponent } from './components/skills/skills.component';
// import { ResumeComponent } from './components/resume/resume.component';
// import { PortfolioComponent } from './components/portfolio/portfolio.component';
// import { ServiciosComponent } from './components/servicios/servicios.component';
// import { TestimonialsComponent } from './components/testimonials/testimonials.component';
// import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    PrincipalComponent,
    AboutComponent
    // ,
    // FactsComponent,
    // SkillsComponent,
    // ResumeComponent,
    // PortfolioComponent,
    // ServiciosComponent,
    // TestimonialsComponent,
    // ContactComponent
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
})
export class AppModule { }
