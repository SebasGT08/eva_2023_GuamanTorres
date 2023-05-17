import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCarreraComponent } from './list-carrera/list-carrera.component';
import { CreateCarreraComponent } from './create-carrera/create-carrera.component';
import { AcercaComponent } from './acerca/acerca.component';

const routes: Routes = [
  { path: 'list-carrera', component: ListCarreraComponent },
  { path: 'create-carrera', component: CreateCarreraComponent },
  { path: 'acerca-de', component: AcercaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
