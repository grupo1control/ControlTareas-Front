import {Usuario} from './usuario.modelo';

export interface Funcionario {
  usuarioFk: Usuario;
  creado: Date;
}
