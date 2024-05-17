import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeRyMComponent } from './personaje-ry-m.component';

describe('PersonajeRyMComponent', () => {
  let component: PersonajeRyMComponent;
  let fixture: ComponentFixture<PersonajeRyMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeRyMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajeRyMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
