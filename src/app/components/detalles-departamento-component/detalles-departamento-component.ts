import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-detalles-departamento-component',
  standalone: false,
  styleUrl: './detalles-departamento-component.css',
  templateUrl: './detalles-departamento-component.html',
})
export class DetallesDepartamentoComponent implements OnInit {
  public departamento! : Departamento;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _cdr : ChangeDetectorRef
  ) {

  }
  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['num']);
      let nombre = params['nombre'];
      let localidad = params['localidad'];
      this.departamento = new Departamento(id, nombre, localidad);
      this._cdr.detectChanges()
    })
  }
}
