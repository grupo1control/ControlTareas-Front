import {FlujoFuncion} from './flujo-funcion.modelo';
import {FlujoTarea} from './flujo-tarea.modelo';

export interface Funcion {
  codigo: number;
  nombre: string;
  descripcion: string;
  estado: string;
  flujosFuncion: FlujoFuncion[];
  flujosTarea: FlujoTarea[];
  creada: Date;
  modificada: Date;
}
