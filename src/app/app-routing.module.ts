
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { RevistaListComponent } from './components/revista/revista-list/revista-list.component';
import { RevistaCreateComponent } from './components/revista/revista-create/revista-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clientes",
    component: ClienteListComponent
  },
  {
    path: "clientes/create",
    component: ClienteCreateComponent
  },
  {
    path: "clientes/edit",
    component: ClienteCreateComponent
  },
  {
    path: "clientes/delete",
    component: ClienteCreateComponent
  },
  {
    path: "revistas",
    component: RevistaListComponent
  },
  {
    path: "revistas/create",
    component: RevistaCreateComponent
  },
  {
    path: "produtos",
    component: ProdutoListComponent
  },
  {
    path: "produtos/create",
    component: ProdutoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
