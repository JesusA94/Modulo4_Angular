import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {path:"",redirectTo:"home",pathMatch:"full"},
 
  {path:"home",component:HomeComponent},
  {path:"detalle/:id",component:DetalleComponent},
  {path:"**",component:NotFoundComponent} //OJO VA DE ULTIMO
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
