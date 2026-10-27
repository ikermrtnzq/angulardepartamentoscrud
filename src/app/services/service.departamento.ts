import { HttpClient } from "@angular/common/http";
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
}