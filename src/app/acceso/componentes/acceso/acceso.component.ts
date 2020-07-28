import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../../nucleo/servicios/usuario.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {Usuario} from '../../../nucleo/modelos/usuario.modelo';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {

  formulario: FormGroup;
  colorDeControl = new FormControl('disabled');
  usuario: Usuario;
  idUsuario: number;

  constructor(
    private constructorDelFormulario: FormBuilder,
    private servicio: UsuarioService
  ) {
    this.construirFormulario();
  }

  ngOnInit(): void {
  }

  traerUsuario(id: number): void {
    this.servicio.obtenerUsuario(id).subscribe(respuesta => {
      if (respuesta[1] === 0 && isNotNullOrUndefined(respuesta[2])) {
        this.usuario = respuesta[2];
      }
      console.log(respuesta[0]);
    });
  }

  construirFormulario(): void {
    this.formulario = this.constructorDelFormulario.group({
      color: this.colorDeControl
    });
  }

}
