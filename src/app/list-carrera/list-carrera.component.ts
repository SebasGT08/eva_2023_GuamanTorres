import { Component , OnInit } from '@angular/core';
import { Carrera, CarreraService } from '../services/carrera.service';

@Component({
  selector: 'app-list-carrera',
  templateUrl: './list-carrera.component.html',
  styleUrls: ['./list-carrera.component.scss']
})
export class ListCarreraComponent implements OnInit{
  carreras: Carrera[] = [];

  constructor(private carreraService: CarreraService) {}

  ngOnInit() {
    this.carreraService.carreras$.subscribe(carreras => {
      this.carreras = carreras;
    });
  }

  eliminarCarrera(codigo: string) {
    this.carreraService.eliminarCarrera(codigo);
  }

}
