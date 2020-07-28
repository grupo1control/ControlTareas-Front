import {Asignacion} from './asignacion.modelo';
import {Usuario} from './usuario.modelo';
import {UnidadInterna} from './unidad-interna.modelo';

export interface Integrante {
  pkIntegrante: {
    fkUsuario: Usuario,
    fkUnidadInterna: UnidadInterna;
  };
  asignaciones: Asignacion[];
  creado: Date;
}
