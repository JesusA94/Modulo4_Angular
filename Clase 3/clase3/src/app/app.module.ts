import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const approutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes) //Modulo para establecer el array de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
