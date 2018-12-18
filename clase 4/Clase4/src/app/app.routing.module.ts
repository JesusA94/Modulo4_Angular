import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRouter: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '**', component: NotFoundComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
