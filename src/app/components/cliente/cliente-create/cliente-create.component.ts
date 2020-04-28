import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { ClienteService } from './../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente
  
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.cliente = new Cliente()
  }

  salvar() {
    this.clienteService.salvar(this.cliente);
    this.clienteService.showMenssage("Cliente cadastrado com sucesso");
    this.router.navigate(["/clientes"]);

  }

  cancelar(): void {
    this.router.navigate(["/clientes"]);
  }

}
