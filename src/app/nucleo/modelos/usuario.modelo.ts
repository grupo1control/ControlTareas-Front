import {Administrador} from './administrador.modelo';
import {Persona} from './persona.modelo';
import {Disennador} from './disennador.modelo';
import {Funcionario} from './funcionario.modelo';
import {Integrante} from './integrante.modelo';

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  clave: string;
  administrador: Administrador;
  disennador: Disennador;
  funcionario: Funcionario;
  integrantes: Integrante[];
  fkPersona: Persona;
  creado: Date;
  modificado: Date;
}
