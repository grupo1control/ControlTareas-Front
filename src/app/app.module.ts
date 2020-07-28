import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NucleoModule} from './nucleo/nucleo.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import {DisennosAngularMaterialModule} from './disennos-angular-material/disennos-angular-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NucleoModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DisennosAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
