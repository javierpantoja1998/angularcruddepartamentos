import { Component, OnInit,  } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.services';
import { Empleado } from 'src/app/models/empleado';
import {Router, Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-empleadosdepartamento',
  templateUrl: './empleadosdepartamento.component.html',
  styleUrls: ['./empleadosdepartamento.component.css']
})
export class EmpleadosdepartamentoComponent implements OnInit {
  public empleados !: Array<Empleado>;


  constructor(
    private _service:DepartamentosService,
    private _activeRoute:ActivatedRoute,
    private _router:Router
  ) { }

  loadEmpleados(){
    this._activeRoute.params.subscribe((params:Params)=>{
      console.log(params['id'])
      var id = parseInt(params['id']);
      this._service.getEmpleados(id).subscribe(res=>{
        this.empleados = res;
      });
    })

  }

  ngOnInit(): void {
    this.loadEmpleados();
  }

}
