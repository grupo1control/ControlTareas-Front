import {Tarea} from './tarea.modelo';
import {Integrante} from './integrante.modelo';

export interface Asignacion {
  rol: string;
  estado: string;
  nota: string;
  pkAsignacion: {
    fkTarea: Tarea;
    fkIntegrante: Integrante;
  };
  creada: Date;
  modificada: Date;
}
