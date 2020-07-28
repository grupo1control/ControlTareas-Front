import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./acceso/acceso.module').then(modulo => modulo.AccesoModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pagina-no-encontrada/pagina-no-encontrada.module').then(modulo => modulo.PaginaNoEncontradaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
