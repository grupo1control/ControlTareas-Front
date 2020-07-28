import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccesoRoutingModule} from './acceso-routing.module';
import {AccesoComponent} from './componentes/acceso/acceso.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DisennosAngularMaterialModule} from '../disennos-angular-material/disennos-angular-material.module';
import {CompartidoModule} from '../compartido/compartido.module';


@NgModule({
  declarations: [AccesoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccesoRoutingModule,
    DisennosAngularMaterialModule,
    ReactiveFormsModule,
    CompartidoModule
  ]
})
export class AccesoModule {
}
