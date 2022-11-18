import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Departamento } from "../models/departamento";


@Injectable()
export class DepartamentosService {
  constructor(private _http:HttpClient){}

  getDepartamentos(): Observable<any>{
    var request = "api/departamentos";
    var url = environment.urlDepartamentos + request;
    return this._http.get(url);
  }

  createDepartamento(departamento: Departamento): Observable<any>{
    //Convertimos nuestro objeto model a json con stringify
    var json = JSON.stringify(departamento);
    //Debemos indicar el tipo de objeto a enviar en la peticion en el header
    var header = new HttpHeaders().set("Content-type", "application/json");
    var request = "api/departamentos";
    var url = environment.urlDepartamentos + request;
    //Al post se le envian tres parametros -> url,objeto a enviar y el header con el tipo de objeto
    return this._http.post(url,json, {headers:header});

  }

  updateDepartamento(departamento:Departamento): Observable<any>{
     //Convertimos nuestro objeto model a json con stringify
     var json = JSON.stringify(departamento);
     //Debemos indicar el tipo de objeto a enviar en la peticion en el header
    var header = new HttpHeaders().set("Content-type", "application/json");
    var request = "api/departamentos";
    var url = environment.urlDepartamentos + request;
    return this._http.put(url,json, {headers:header});
  }

  deleteDepartamento(id:string): Observable<any>{
    var request = "api/departamentos/" + id;
    var url = environment.urlDepartamentos + request;
    return this._http.delete(url);
  }

  getEmpleados(id:number): Observable<any>{
    var request = "api/Empleados/EmpleadosDepartamento/" + id;
    var url = environment.urlApiEmpleados + request;
    return this._http.get(url);
  }
}

