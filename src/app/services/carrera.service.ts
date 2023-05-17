import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Carrera {
  codigo: string;
  nombre: string;
  ciclos: number;
}


@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  private carrerasSubject = new BehaviorSubject<Carrera[]>([]);
  carreras$ = this.carrerasSubject.asObservable();

  agregarCarrera(carrera: Carrera) {
    this.carrerasSubject.next([...this.carrerasSubject.value, carrera]);
  }

  eliminarCarrera(codigo: string) {
    this.carrerasSubject.next(this.carrerasSubject.value.filter(carrera => carrera.codigo !== codigo));
  }
}
