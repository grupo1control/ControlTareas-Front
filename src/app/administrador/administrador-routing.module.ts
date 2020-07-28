import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanelAdministradorComponent} from './componentes/panel-administrador/panel-administrador.component';
import {NavegadorAdministradorComponent} from './componentes/navegador-administrador/navegador-administrador.component';
import {FormularioCreacionTareaComponent} from '../compartido/componentes/formulario-creacion-tarea/formulario-creacion-tarea.component';
import {FormularioEdicionTareaComponent} from '../compartido/componentes/formulario-edicion-tarea/formulario-edicion-tarea.component';
import {ListaDeTareasComponent} from '../compartido/componentes/lista-de-tareas/lista-de-tareas.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'panel',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NavegadorAdministradorComponent,
    children: [
      {
        path: 'panel',
        component: PanelAdministradorComponent
      },
      {
        path: 'mis-tareas',
        component: ListaDeTareasComponent
      },
      {
        path: 'nueva-tarea',
        component: FormularioCreacionTareaComponent
      },
      {
        path: 'editar-tarea/:codigo',
        component: FormularioEdicionTareaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule {
}
