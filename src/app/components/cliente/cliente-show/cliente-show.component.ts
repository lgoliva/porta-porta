import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-show',
  templateUrl: './cliente-show.component.html',
  styleUrls: ['./cliente-show.component.css']
})
export class ClienteShowComponent implements OnInit {

  cliente: Cliente

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.clienteService.obterCliente(id).subscribe(cliente =>
        this.cliente = cliente
      )
  }

}
