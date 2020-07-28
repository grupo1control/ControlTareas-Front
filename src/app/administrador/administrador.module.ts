import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdministradorRoutingModule} from './administrador-routing.module';
import {PanelAdministradorComponent} from './componentes/panel-administrador/panel-administrador.component';
import {NavegadorAdministradorComponent} from './componentes/navegador-administrador/navegador-administrador.component';
import {DisennosAngularMaterialModule} from '../disennos-angular-material/disennos-angular-material.module';
import {CompartidoModule} from '../compartido/compartido.module';


@NgModule({
  declarations: [PanelAdministradorComponent, NavegadorAdministradorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    DisennosAngularMaterialModule,
    CompartidoModule
  ]
})
export class AdministradorModule {
}
