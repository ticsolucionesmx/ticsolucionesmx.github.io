import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'presentacion', component: PresentacionComponent},
  // deve de ir al final
  { path: '**', redirectTo: '', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
