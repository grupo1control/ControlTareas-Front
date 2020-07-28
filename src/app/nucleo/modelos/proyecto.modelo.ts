import {Proceso} from './proceso.modelo';
import {Empresa} from './empresa.modelo';
import {Administrador} from './administrador.modelo';

export interface Proyecto {
  codigo: number;
  nombre: string;
  estado: string;
  procesos: Proceso[];
  fkEmpresa: Empresa;
  fkAdministrador: Administrador;
  creado: Date;
  modificado: Date;
}
