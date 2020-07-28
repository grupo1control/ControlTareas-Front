import {Usuario} from './usuario.modelo';
import {Proyecto} from './proyecto.modelo';

export interface Administrador {
  usuarioFk: Usuario;
  proyectos: Proyecto[];
  creado: Date;
}
