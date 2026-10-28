import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetallesDepartamentoComponent } from './components/detalles-departamento-component/detalles-departamento-component';
import { UpdateComponent } from './components/update-component/update-component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "create", component : CreateComponent},
  {path : "details/:num/:nombre/:localidad", component : DetallesDepartamentoComponent},
  {path : "update/:id", component : UpdateComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
