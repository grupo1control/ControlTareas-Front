import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccesoComponent} from './componentes/acceso/acceso.component';


const routes: Routes = [
  {
    path: '',
    // redirectTo: 'sesion',
    pathMatch: 'full',
    component: AccesoComponent
  },
  {
    path: 'sesion',
    redirectTo: 'sesion/administrador/mis-tareas',
    pathMatch: 'full'
  },
  {
    path: 'sesion',
    children: [
      {
        path: 'administrador',
        loadChildren: () => import('../administrador/administrador.module').then(modulo => modulo.AdministradorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoRoutingModule {
}
