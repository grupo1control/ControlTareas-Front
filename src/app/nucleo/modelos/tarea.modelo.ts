import {Asignacion} from './asignacion.modelo';
import {FlujoTarea} from './flujo-tarea.modelo';
import {Plazo} from './plazo.modelo';

export interface Tarea {
  codigo: number;
  nombre: string;
  descripcion: string;
  estado: string;
  asignaciones: Asignacion[];
  flujosTarea: FlujoTarea[];
  plazos: Plazo[];
  creada: Date;
  modificada: Date;
}
