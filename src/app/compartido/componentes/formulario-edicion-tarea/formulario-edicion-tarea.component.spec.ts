import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEdicionTareaComponent } from './formulario-edicion-tarea.component';

describe('FormularioEdicionTareaComponent', () => {
  let component: FormularioEdicionTareaComponent;
  let fixture: ComponentFixture<FormularioEdicionTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEdicionTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEdicionTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
