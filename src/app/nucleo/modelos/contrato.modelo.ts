import {Empresa} from './empresa.modelo';
import {Persona} from './persona.modelo';

export interface Contrato {
  salario: number;
  cargo: string;
  funcion: string;
  pkContrato: {
    fkEmpresa: Empresa,
    fkPersona: Persona
  };
  creado: Date;
  modificado: Date;
}
