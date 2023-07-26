import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContabilidadeComponent } from './contabilidade/contabilidade/contabilidade.component';
import { NavComponent } from './nav/nav/nav.component';
import { PapelariaComponent } from './papelaria/papelaria/papelaria.component';
import { HomeComponent } from './home/home/home.component';
import { DepartamentoPessoalComponent } from './departamento-pessoal/departamento-pessoal/departamento-pessoal.component';
import { DepartamentoFiscalComponent } from './departamento-fiscal/departamento-fiscal/departamento-fiscal.component';
import { AdministracaoComponent } from './administracao/administracao/administracao.component';

@NgModule({
  declarations: [
    AppComponent,
    ContabilidadeComponent,
    NavComponent,
    PapelariaComponent,
    HomeComponent,
    DepartamentoPessoalComponent,
    DepartamentoFiscalComponent,
    AdministracaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
