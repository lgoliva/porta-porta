

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { RevistaListComponent } from './components/revista/revista-list/revista-list.component';
import { RevistaCreateComponent } from './components/revista/revista-create/revista-create.component';
import { ClienteShowComponent } from './components/cliente/cliente-show/cliente-show.component';
import { PedidoListClienteComponent } from './components/pedido/pedido-list-cliente/pedido-list-cliente.component';
import { PedidoCreateClienteComponent } from './components/pedido/pedido-create-cliente/pedido-create-cliente.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cliente",
    component: ClienteListComponent
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "cliente/edit/:id",
    component: ClienteCreateComponent
  },
  {
    path: "cliente/show/:id",
    component: ClienteShowComponent
  },
  {
    path: "cliente/delete",
    component: ClienteCreateComponent
  },
  {
    path: "revista",
    component: RevistaListComponent
  },
  {
    path: "revista/create",
    component: RevistaCreateComponent
  },
  {
    path: "produto",
    component: ProdutoListComponent
  },
  {
    path: "produto/create",
    component: ProdutoCreateComponent
  },
  {
    path: "pedido/listByCliente/:id",
    component: PedidoListClienteComponent
  },
  {
    path: "pedido/createByCliente/:id",
    component: PedidoCreateClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
