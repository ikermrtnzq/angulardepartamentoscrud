import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamento';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{
  public departamentos! : Array<Departamento>
  constructor(
    private _service: ServiceDepartamentos, 
    private _cdr: ChangeDetectorRef
  ){}

  async eliminar(id: number){
    let response = await this._service.borrarDepartamento(id);
    await this.cargar()
  }
  async cargar(){
    this.departamentos = await this._service.getDepartamentos();
    this._cdr.detectChanges()
  }
  async ngOnInit(): Promise<void> {
    await this.cargar()
  }

}
