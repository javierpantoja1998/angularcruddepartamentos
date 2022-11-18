import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenurutasComponent } from './components/menurutas/menurutas.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { routing, appRoutingProviders } from 'src/app.routing';
import { DepartamentosService } from './services/departamentos.services';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { ModificardepartamentoComponent } from './components/modificardepartamento/modificardepartamento.component';
@NgModule({
  declarations: [
    AppComponent,
    MenurutasComponent,
    DepartamentosComponent,
    InsertardepartamentoComponent,
    ModificardepartamentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders,DepartamentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
