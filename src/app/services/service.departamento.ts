import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChangeDetectorRef, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Departamento } from "../models/departamento";

@Injectable()

export class ServiceDepartamentos{
    url  = environment.urlApi;
    constructor(
        private _http : HttpClient
    ){}

    async getDepartamentos(): Promise<Departamento[]>{
        let endpoint= "api/departamentos";
        return firstValueFrom(this._http.get<Departamento[]>(this.url+endpoint))
    }
    async createDepartamento(departamento: Departamento): Promise<any>{
        //convertimos el objeto a json
        let json = JSON.stringify(departamento);
        //creamos un objeto header para el type
        let header= new HttpHeaders();
        //incluimos la key en el header
        header = header.set("content-type", "application/json");
        let endpoint= "api/epartamentos";
        return firstValueFrom(
            this._http.post(this.url+endpoint, json, {headers: header})
        )
    }
}