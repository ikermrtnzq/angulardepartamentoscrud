import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceDepartamentos } from './services/service.departamento';
import { CreateComponent } from './components/create-component/create-component';
import { DetallesDepartamentoComponent } from './components/detalles-departamento-component/detalles-departamento-component';
import { UpdateComponent } from './components/update-component/update-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    CreateComponent,
    DetallesDepartamentoComponent,
    UpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient(), provideBrowserGlobalErrorListeners(), ServiceDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
