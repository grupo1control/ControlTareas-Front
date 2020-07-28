import {Usuario} from './usuario.modelo';
import {Proceso} from './proceso.modelo';

export interface Disennador {
  usuarioFk: Usuario;
  procesos: Proceso[];
  creado: Date;
}
