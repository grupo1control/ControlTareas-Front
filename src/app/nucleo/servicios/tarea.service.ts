import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) {
  }

  obtenerTarea(codigo: number) {
    return this.http.get<any[]>(`/api/tarea/${codigo}`);
  }

  crearTarea(nombre: string, descripcion: string, estado: string) {
    return this.http.post<any[]>(
      `/api/tarea/ingresar?nombre=${nombre}&descripcion=${descripcion}&estado=${estado}`,
      {nombre, descripcion, estado}
    );
  }

  obtenerTareas() {
    return this.http.get<any[]>('/api/tarea/lista');
  }

  borrarTarea(codigo: number) {
    return this.http.delete<any[]>(`/api/tarea/eliminar/${codigo}`);
  }

  actualizarTarea(codigo: number, cambios: Partial<any>) {
    console.log(cambios);
    return this.http.put(`/api/tarea/actualizar/${codigo}
    ?nombre=${cambios.nombre}
    &descripcion=${cambios.descripcion}
    &estado=${cambios.estado}`,
      cambios);
  }
}
