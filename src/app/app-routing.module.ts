import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { preRegistrationComponent } from './pages/preRegistration/preRegistration.component';
import { HomeComponent } from './pages/home/home.component';
import { DonorComponent } from './pages/donor/donor.component';
import { ContemplatedRegistrationComponent } from './pages/contemplated-registration/contemplated-registration.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'preCadastro', component: preRegistrationComponent },
  { path: 'doador', component: DonorComponent },
  { path: 'cadastroContemplado', component: ContemplatedRegistrationComponent, canActivate: [AuthGuard],
  data: {
    role: 'CONTEMPLADO'
  }},
  ...LoginRoutes
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
 }
