import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DepartamentoFiscalComponent } from './departamento-fiscal/departamento-fiscal/departamento-fiscal.component';
import { DepartamentoPessoalComponent } from './departamento-pessoal/departamento-pessoal/departamento-pessoal.component';
import { ContabilidadeComponent } from './contabilidade/contabilidade/contabilidade.component';
import { PapelariaComponent } from './papelaria/papelaria/papelaria.component';
import { AdministracaoComponent } from './administracao/administracao/administracao.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'departamento-fiscal', component: DepartamentoFiscalComponent, pathMatch: 'full'},
  {path: 'departamento-pessoal', component: DepartamentoPessoalComponent, pathMatch: 'full'},
  {path: 'contabilidade', component: ContabilidadeComponent, pathMatch: 'full'},
  {path: 'administracao', component: AdministracaoComponent, pathMatch: 'full'},
  {path: 'papelaria', component: PapelariaComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
