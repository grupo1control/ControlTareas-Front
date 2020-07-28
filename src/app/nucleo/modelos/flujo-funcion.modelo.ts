import {Proceso} from './proceso.modelo';
import {Funcion} from './funcion.modelo';

export interface FlujoFuncion {
  pkFlujoFuncion: {
    indice: number,
    fkProceso: Proceso,
    fkFuncion: Funcion
  };
  creado: Date;
  modificado: Date;
}
