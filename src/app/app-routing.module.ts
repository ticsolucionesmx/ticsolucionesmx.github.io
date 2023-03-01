import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { InvitacionComponent } from './invitacion/invitacion.component';

const routes: Routes = [
  // {path:'', component: PrincipalComponent},
  // {path:'presentacion', component: PresentacionComponent},
  {path : '',component: PresentacionComponent},
  {path : 'invitacion-de-mis-xv-isabel',component: InvitacionComponent},
  // deve de ir al final
  { path: '**', redirectTo: '', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
