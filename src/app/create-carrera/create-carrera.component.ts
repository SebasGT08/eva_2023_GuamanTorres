import { Component, OnInit } from '@angular/core';
import { Carrera, CarreraService } from '../services/carrera.service';

@Component({
  selector: 'app-create-carrera',
  templateUrl: './create-carrera.component.html',
  styleUrls: ['./create-carrera.component.scss']
})
export class CreateCarreraComponent {
  carrera: Carrera = { codigo: '', nombre: '', ciclos: 0 };

  constructor(private carreraService: CarreraService) {}

  agregarCarrera() {
    this.carreraService.agregarCarrera(this.carrera);
    this.carrera = { codigo: '', nombre: '', ciclos: 0 };
  }
}
