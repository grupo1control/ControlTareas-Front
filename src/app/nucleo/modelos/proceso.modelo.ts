import {FlujoFuncion} from './flujo-funcion.modelo';
import {Disennador} from './disennador.modelo';
import {UnidadInterna} from './unidad-interna.modelo';
import {Proyecto} from './proyecto.modelo';

export interface Proceso {
  codigo: number;
  indice: number;
  nombre: string;
  descripcion: string;
  estado: string;
  flujosFuncion: FlujoFuncion[];
  unidadInternaFk: UnidadInterna;
  disennadorFk: Disennador;
  proyectoFk: Proyecto;
  creado: Date;
  modificado: Date;
}
