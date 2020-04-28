import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { ClienteService } from './../cliente.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private router: Router, private clienteService: ClienteService) { }
  clientes = new MatTableDataSource();
  
  displayedColumns: string[] = ['nome', 'telefone', 'endereco', 'paroquia', 'action'];
  
  ngOnInit(): void {
    this.clienteService.listar().subscribe(actions => {
      this.clientes = new MatTableDataSource(actions);
    });
  }

  createCliente() {
    this.router.navigate(["/clientes/create"])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientes.filter = filterValue.trim().toLowerCase();
  }

}
