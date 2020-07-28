import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisennosAngularMaterialModule} from '../disennos-angular-material/disennos-angular-material.module';
import {FormularioCreacionTareaComponent} from './componentes/formulario-creacion-tarea/formulario-creacion-tarea.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ListaDeTareasComponent} from './componentes/lista-de-tareas/lista-de-tareas.component';
import {FormularioEdicionTareaComponent} from './componentes/formulario-edicion-tarea/formulario-edicion-tarea.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [FormularioCreacionTareaComponent, ListaDeTareasComponent, FormularioEdicionTareaComponent],
  exports: [
    ListaDeTareasComponent,
    FormularioCreacionTareaComponent,
    FormularioEdicionTareaComponent
  ],
  imports: [
    CommonModule,
    DisennosAngularMaterialModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CompartidoModule {
}
