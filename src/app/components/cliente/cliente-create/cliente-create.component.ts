import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'
import { ClienteService } from './../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente
  
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.clienteService.obterCliente(id).subscribe(cliente =>
        this.cliente = cliente
      )
    } else {
      this.cliente = new Cliente()
    }
  }

  salvar() {
    this.clienteService.salvar(this.cliente);
    this.clienteService.showMenssage("Cliente cadastrado com sucesso");
    this.router.navigate(["/cliente"]);

  }

  cancelar(): void {
    this.router.navigate(["/cliente"]);
  }

}
