import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.services';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  //Definimos una variable para recoger los departamentos
  public departamentos !: Array<Departamento>;

  //Recibimos la service
  constructor(private _service:DepartamentosService) { }


  //Hacemos el get del service aqui
  ngOnInit(): void {

    this._service.getDepartamentos().subscribe(res=>{
      this.departamentos = res;
    });
  }

}
