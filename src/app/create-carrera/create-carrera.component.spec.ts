import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarreraComponent } from './create-carrera.component';

describe('CreateCarreraComponent', () => {
  let component: CreateCarreraComponent;
  let fixture: ComponentFixture<CreateCarreraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCarreraComponent]
    });
    fixture = TestBed.createComponent(CreateCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
