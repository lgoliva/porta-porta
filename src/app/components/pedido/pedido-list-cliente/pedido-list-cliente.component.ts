import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { PedidoService } from './../pedido.service';
import { ClienteService } from './../../cliente/cliente.service';
import { Cliente } from './../../cliente/cliente';

@Component({
  selector: 'app-pedido-list-cliente',
  templateUrl: './pedido-list-cliente.component.html',
  styleUrls: ['./pedido-list-cliente.component.css']
})
export class PedidoListClienteComponent implements OnInit {

  cliente: Cliente
  pedidos = new MatTableDataSource();

  displayedColumns: string[] = ['codigo', 'nome', 'porcentagem', 'revista', 'action'];

  constructor(
    private clienteService: ClienteService,
    private pedidoService: PedidoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const clienteId = this.activatedRoute.snapshot.paramMap.get('id');

    this.clienteService.obterCliente(clienteId).subscribe(cliente =>
      this.cliente = cliente
    );

    this.pedidoService.obterPorCliente(clienteId).subscribe(pedidos =>
      this.pedidos = new MatTableDataSource(pedidos)
    ); 
  }
  
  createPedido(clienteId) {
    this.router.navigate(["pedido/createByCliente/" + clienteId])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pedidos.filter = filterValue.trim().toLowerCase();
  }

}
