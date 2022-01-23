import { DepositionsRoutingModule } from './depositions/depositions-routing.module';
import { PartnersRoutingModule } from './partners/partners-routing.module';
import { PromotionsModule } from './promotions/promotions.module';
import { NewsModule } from './news/news.module';
import { NgwWowService, NgwWowModule } from 'ngx-wow';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuncionamentoRoutingModule } from './funcionamento/funcionamento-routing.module';
import { FuncionamentoModule } from './funcionamento';
import { NewsRoutingModule } from './news/news-routing.module';
import { PromotionsRoutingModule } from './promotions/promotions-routing.module';
import { PartnersModule } from './partners';
import { DepositionsModule } from './depositions';

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
    FuncionamentoModule,
    NewsRoutingModule,
    NewsModule,
    PartnersRoutingModule,
    PartnersModule,
    DepositionsRoutingModule,
    DepositionsModule,
    PromotionsRoutingModule,
    PromotionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
