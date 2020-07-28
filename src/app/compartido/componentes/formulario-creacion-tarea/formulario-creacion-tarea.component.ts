import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TareaService} from '../../../nucleo/servicios/tarea.service';
import {PlazoService} from '../../../nucleo/servicios/plazo.service';
import {Router} from '@angular/router';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-formulario-creacion-tarea',
  templateUrl: './formulario-creacion-tarea.component.html',
  styleUrls: ['./formulario-creacion-tarea.component.scss']
})
export class FormularioCreacionTareaComponent {

  formulario: FormGroup;
  fechaMinima = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1
  );

  constructor(
    private constructorDeFormulario: FormBuilder,
    private servicioTarea: TareaService,
    private servicioPlazo: PlazoService,
    private enrutador: Router
  ) {
    this.construirFormulario();
  }

  construirFormulario() {
    this.formulario = this.constructorDeFormulario.group({
      nombreTarea: ['', [Validators.required]],
      descripcionTarea: [''],
      primerPlazo: ['', [Validators.required]]
    });
  }

  guardarTarea(evento: Event) {
    evento.preventDefault();
    let fechaPlazo = this.formulario.value.primerPlazo;
    fechaPlazo = `${fechaPlazo.getFullYear()}-${fechaPlazo.getMonth() + 1}-${fechaPlazo.getDate()}`;
    if (this.formulario.valid) {
      this.servicioTarea.crearTarea(
        this.formulario.value.nombreTarea,
        this.formulario.value.descripcionTarea,
        'Pendiente'
      ).subscribe(respuesta => {
        if (respuesta[1] === 0) {
          console.log(respuesta[0]);
          if (isNotNullOrUndefined(respuesta[2])) {
            this.guardarPlazo(respuesta[2], fechaPlazo);
          }
          alert('Tarea creada exitosamente 👍');
        }
      });
    }
    // this.enrutador.navigate(['./sesion/administrador/mis-tareas']);
  }

  guardarPlazo(codigoTarea: number, fecha: string) {
    this.servicioPlazo.crearPlazo(codigoTarea, fecha).subscribe(respuesta => console.log(respuesta[0]));
  }
}
