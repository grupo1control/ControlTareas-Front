import {Usuario} from './usuario.modelo';
import {Contrato} from './contrato.modelo';

export interface Persona {
  rut: string;
  nombre: string;
  apellido: string;
  natalicio: Date;
  contratos: Contrato[];
  usuarios: Usuario[];
  creada: Date;
  modificada: Date;
}
