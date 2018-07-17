import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { MembreteComponent } from './membrete/membrete.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ComidaComponent } from './comida/comida.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { VitrinaComponent } from './vitrina/vitrina.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembreteComponent,
    BarraBusquedaComponent,
    UsuarioComponent,
    ComidaComponent,
    IngredienteComponent,
    VitrinaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
