import {Tarea} from './tarea.modelo';
import {Funcion} from './funcion.modelo';

export interface FlujoTarea {
  pkFlujoTarea: {
    indice: number,
    fkFuncion: Funcion,
    fkTarea: Tarea
  };
  creado: Date;
  modificado: Date;
}
