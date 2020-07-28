import {Integrante} from './integrante.modelo';
import {Proceso} from './proceso.modelo';

export interface UnidadInterna {
  codigo: number;
  nombre: string;
  descripcion: string;
  integrantes: Integrante[];
  procesos: Proceso[];
  creada: Date;
  modificada: Date;
}
