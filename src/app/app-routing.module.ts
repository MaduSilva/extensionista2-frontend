import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { preRegistrationComponent } from './pages/preRegistration/preRegistration.component';
import { HomeComponent } from './pages/home/home.component';
import { DonorComponent } from './pages/donor/donor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'preCadastro', component: preRegistrationComponent },
  { path: 'doador', component: DonorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
