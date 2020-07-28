import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlazoService {

  constructor(private http: HttpClient) {
  }

  borrarPlazo(codigoTarea: number, contador: number) {
    return this.http.delete<any[]>(`/api/plazo/eliminar/${codigoTarea}-${contador}`);
  }

  crearPlazo(codigoTarea: number, fecha: string) {
    return this.http.post<any[]>(`/api/plazo/ingresar?codigoTarea=${codigoTarea}&fecha=${fecha}`,
      {codigoTarea, fecha});
  }

  obtenerPlazosPor(codigoTarea: number) {
    return this.http.get<any[]>(`/api/plazo/${codigoTarea}`);
  }

  obtenerPlazos() {
    return this.http.get<any[]>(`/api/plazo/lista`);
  }
}
