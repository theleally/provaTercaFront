import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarCarroComponent } from './components/views/carro/listar-carro/listar-carro.component';
import { CadastrarCarroComponent } from './components/views/carro/cadastrar-carro/cadastrar-carro.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarCarroComponent,
    CadastrarCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
