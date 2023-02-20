import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContemplatedComponent } from './pages/form-contemplated/form-contemplated.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formContemplado', component: FormContemplatedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
