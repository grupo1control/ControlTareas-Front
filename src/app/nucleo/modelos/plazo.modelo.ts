import {Tarea} from './tarea.modelo';

export interface Plazo {
  pkPlazo: {
    contador: number;
    fkTarea: Tarea;
  };
  fecha: Date;
  creado: Date;
}
