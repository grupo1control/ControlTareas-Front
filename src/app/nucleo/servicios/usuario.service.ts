import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  obtenerUsuario(id: number): Observable<any[]> {
    return this.http.get<any[]>(`/api/usuario/${id}`);
  }

}
