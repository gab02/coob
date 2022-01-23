import { NgwWowService, NgwWowModule } from 'ngx-wow';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuncionamentoRoutingModule } from './funcionamento/funcionamento-routing.module';
import { FuncionamentoModule } from './funcionamento';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeRoutingModule,
    HomeModule,
    NgwWowModule,
    FuncionamentoRoutingModule,
    FuncionamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
