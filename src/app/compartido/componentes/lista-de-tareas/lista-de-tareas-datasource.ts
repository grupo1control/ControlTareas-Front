import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {merge, Observable, of as observableOf} from 'rxjs';
import {TareaService} from '../../../nucleo/servicios/tarea.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {PlazoService} from '../../../nucleo/servicios/plazo.service';


/**
 * Data source for the ListaDeTareas view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListaDeTareasDataSource extends DataSource<any> {
  datos = [];
  paginador: MatPaginator;
  orden: MatSort;

  constructor(
    private servicioTarea: TareaService,
    private servicioPlazo: PlazoService
  ) {
    super();
    this.traerDatos();
  }

  traerDatos() {
    const listaDeDatos = [];
    this.servicioTarea.obtenerTareas().subscribe(respuesta => {
      if (respuesta[1] === 0 && isNotNullOrUndefined(respuesta[2])) {
        var i: number;
        for (i = 2; i < respuesta.length; i++) {
          listaDeDatos.push({
            codigo: respuesta[i].codigo,
            nombre: respuesta[i].nombre,
            descripcion: respuesta[i].descripcion,
            estado: respuesta[i].estado,
            plazo: '0000-00-00'
          });
        }
        console.log(respuesta[0]);
      }
      this.datos = listaDeDatos;
      this.traerPlazos();
      // console.log(listaDeDatos);
    });
  }

  traerPlazos() { // codigoTarea: number
    this.datos.forEach(dato => {
      this.servicioPlazo.obtenerPlazosPor(dato.codigo).subscribe(respuesta => {
        if (respuesta[1] === 0 && isNotNullOrUndefined(respuesta[2])) {
          dato.plazo = respuesta[respuesta.length - 1].fecha;
        }
      });
    });
  }

  eliminarTarea(codigo: number) {
    console.log(`Tarea a eliminar:\nID = ${codigo}`);
    this.servicioTarea.borrarTarea(codigo).subscribe(respuesta => console.log(respuesta[0]));
  }

  eliminarPlazo(codigoTarea: number, contador: number) {
    console.log(`Plazo a eliminiar:\ncódigo = ${codigoTarea}\ncontador = ${contador}`);
    this.servicioPlazo.borrarPlazo(codigoTarea, contador).subscribe(respuesta => console.log(respuesta[0]));
  }

  eliminarDatos(codigoTarea: number) {
    this.servicioPlazo.obtenerPlazosPor(codigoTarea).subscribe(respuesta => {
      if (isNotNullOrUndefined(respuesta[2])) {
        let contador;
        for (contador = 2; contador < respuesta.length; contador++) {
          this.eliminarPlazo(codigoTarea, respuesta[contador].pkPlazo.contador);
        }
        this.eliminarTarea(codigoTarea);
      }
    });
    this.traerDatos();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<any> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.datos),
      this.paginador.page,
      this.orden.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.datos]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: any) {
    const startIndex = this.paginador.pageIndex * this.paginador.pageSize;
    return data.splice(startIndex, this.paginador.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: any) {
    if (!this.orden.active || this.orden.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.orden.direction === 'asc';
      switch (this.orden.active) {
        case 'nombre':
          return compare(a.nombre, b.nombre, isAsc);
        case 'estado':
          return compare(+a.estado, +b.estado, isAsc);
        case 'descripcion':
          return compare(+a.descripcion, +b.descripcion, isAsc);
        case 'plazo':
          return compare(+a.creada, +b.creada, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
