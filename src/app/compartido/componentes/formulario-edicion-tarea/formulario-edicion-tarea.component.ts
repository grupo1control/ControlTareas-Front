import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TareaService} from '../../../nucleo/servicios/tarea.service';
import {PlazoService} from '../../../nucleo/servicios/plazo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-formulario-edicion-tarea',
  templateUrl: './formulario-edicion-tarea.component.html',
  styleUrls: ['./formulario-edicion-tarea.component.scss']
})
export class FormularioEdicionTareaComponent implements OnInit {

  formulario: FormGroup;
  fechaMinima = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1
  );
  codgioTarea: number;

  constructor(
    private constructorDeFormulario: FormBuilder,
    private servicioTarea: TareaService,
    private servicioPlazo: PlazoService,
    private enrutador: Router,
    private rutaActivada: ActivatedRoute
  ) {
    this.construirFormulario();
  }

  construirFormulario() {
    this.formulario = this.constructorDeFormulario.group({
      nombreTarea: ['', [Validators.required]],
      descripcionTarea: [''],
      nuevoPlazo: ['', [Validators.required]],
      estadoTarea: ['', [Validators.required]]
    });
  }

  guardarTarea(evento: Event) {
    evento.preventDefault();
    let fechaPlazo = this.formulario.value.nuevoPlazo;
    fechaPlazo = `${fechaPlazo.getFullYear()}-${fechaPlazo.getMonth() + 1}-${fechaPlazo.getDate()}`;
    if (this.formulario.valid) {
      const modsTarea = {
        nombre: this.formulario.value.nombreTarea,
        descripcion: this.formulario.value.descripcionTarea,
        estado: this.formulario.value.estadoTarea
      };
      this.servicioTarea.actualizarTarea(this.codgioTarea, modsTarea).subscribe(respuesta => {
        console.log(respuesta[0]);
        if (respuesta[1] === 0) {
          this.modificarPlazo(this.codgioTarea, fechaPlazo);
          alert('Modificación exitosa 👍');
        }
      });
      // this.enrutador.navigate(['./sesion/administrador/mis-tareas']);
    }
  }

  modificarPlazo(codigoTarea: number, fecha: string) {
    this.servicioPlazo.obtenerPlazosPor(codigoTarea).subscribe(respuesta => {
      if (isNotNullOrUndefined(respuesta[2])) {
        let contador;
        for (contador = 2; contador < respuesta.length; contador++) {
          this.eliminarPlazo(codigoTarea, respuesta[contador].pkPlazo.contador);
        }
      }
    });
    this.servicioPlazo.crearPlazo(codigoTarea, fecha).subscribe(respuesta => console.log(respuesta[0]));
  }

  eliminarPlazo(codigoTarea: number, contador: number) {
    console.log(`Plazo a eliminiar:\ncódigo = ${codigoTarea}\ncontador = ${contador}`);
    this.servicioPlazo.borrarPlazo(codigoTarea, contador).subscribe(respuesta => console.log(respuesta[0]));
  }

  ngOnInit(): void {
    this.rutaActivada.params.subscribe(parametros => {
      this.codgioTarea = parametros.codigo;
      this.servicioTarea.obtenerTarea(this.codgioTarea).subscribe(respuesta => {
        if (respuesta[1] === 0 && isNotNullOrUndefined(respuesta[2])) {
          this.formulario.patchValue({
            nombreTarea: respuesta[2].nombre,
            descripcionTarea: respuesta[2].descripcion,
            estadoTarea: respuesta[2].estado
          });
          console.log(respuesta[0]);
        }
      });
      this.servicioPlazo.obtenerPlazosPor(this.codgioTarea).subscribe(respuesta => {
        if (respuesta[1] === 0 && isNotNullOrUndefined(respuesta[2])) {
          this.formulario.patchValue({nuevoPlazo: respuesta[respuesta.length - 1].fecha});
        }
        console.log(respuesta[0]);
      });
    });
  }

}
