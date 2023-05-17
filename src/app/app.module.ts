import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ListCarreraComponent } from './list-carrera/list-carrera.component';
import { CreateCarreraComponent } from './create-carrera/create-carrera.component';
import { AcercaComponent } from './acerca/acerca.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CabezeraComponent,
    MenuComponent,
    ContenidoComponent,
    ListCarreraComponent,
    CreateCarreraComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
