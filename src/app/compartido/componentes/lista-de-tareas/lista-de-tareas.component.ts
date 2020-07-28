import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ListaDeTareasDataSource} from './lista-de-tareas-datasource';
import {TareaService} from '../../../nucleo/servicios/tarea.service';
import {PlazoService} from '../../../nucleo/servicios/plazo.service';

@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.scss']
})
export class ListaDeTareasComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginador: MatPaginator;
  @ViewChild(MatSort) orden: MatSort;
  @ViewChild(MatTable) tabla: MatTable<any>;
  fuenteDeDatos: ListaDeTareasDataSource;
  columnasDesplegadas = ['nombre', 'descripcion', 'estado', 'plazo', 'acciones'];

  constructor(
    private servicioTarea: TareaService,
    private servicioPlazo: PlazoService
  ) { }

  ngOnInit() {
    console.log('ngOnInit()');
    this.fuenteDeDatos = new ListaDeTareasDataSource(this.servicioTarea, this.servicioPlazo);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
    this.fuenteDeDatos.orden = this.orden;
    this.fuenteDeDatos.paginador = this.paginador;
    this.tabla.dataSource = this.fuenteDeDatos;
    this.tabla.renderRows();
  }
}
