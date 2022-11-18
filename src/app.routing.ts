import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { DepartamentosComponent } from "./app/components/departamentos/departamentos.component";
import { InsertardepartamentoComponent } from "./app/components/insertardepartamento/insertardepartamento.component";
import { ModificardepartamentoComponent } from "./app/components/modificardepartamento/modificardepartamento.component";

const appRoutes: Routes = [

  {path: "", component:DepartamentosComponent },
  {path: "nuevodepartamento", component:InsertardepartamentoComponent },
  {path: "modificar/:numero/:nombre/:localidad", component:ModificardepartamentoComponent }
]

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
