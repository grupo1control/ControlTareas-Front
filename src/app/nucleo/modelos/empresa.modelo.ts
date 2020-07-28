import {Contrato} from './contrato.modelo';
import {Proyecto} from './proyecto.modelo';

export interface Empresa {
  rut: string;
  razonSocial: string;
  nombre: string;
  giroComercial: string;
  contratos: Contrato[];
  proyectos: Proyecto[];
  creada: Date;
  modificada: Date;
}
