import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.services';
import {Router, Params, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-modificardepartamento',
  templateUrl: './modificardepartamento.component.html',
  styleUrls: ['./modificardepartamento.component.css']
})
export class ModificardepartamentoComponent implements OnInit {

  public departamento !: Departamento;
  @ViewChild("cajanumero") cajaNumero!:ElementRef;
  @ViewChild("cajanombre") cajaNombre!:ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!:ElementRef;

  constructor(
    private _service:DepartamentosService,
    private _activeRoute:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      var num = parseInt(params['numero']);
      var nom = (params['nombre']);
      var loc = (params['localidad']);
      this.departamento = new Departamento(num,nom,loc);
    });
  }

  updateDepartamento():void{
    var nombre = this.cajaNombre.nativeElement.value;
    var localidad = this.cajaLocalidad.nativeElement.value;
    //Modificamos los datos del departamento con los datos de las cajas
    this.departamento.nombre = nombre;
    this.departamento.localidad = localidad;
    this._service.updateDepartamento(this.departamento).subscribe(res=>{
      this._router.navigate(['/']);
    });
  }

}
