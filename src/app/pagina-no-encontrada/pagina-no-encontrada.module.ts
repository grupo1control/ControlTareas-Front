import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaginaNoEncontradaRoutingModule} from './pagina-no-encontrada-routing.module';
import {PaginaNoEncontradaComponent} from './pagina-no-encontrada.component';
import {DisennosAngularMaterialModule} from '../disennos-angular-material/disennos-angular-material.module';


@NgModule({
  declarations: [PaginaNoEncontradaComponent],
  imports: [
    CommonModule,
    PaginaNoEncontradaRoutingModule,
    DisennosAngularMaterialModule
  ]
})
export class PaginaNoEncontradaModule {
}
