import { RevistaService } from './../../revista/revista.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Revista } from '../../revista/revista';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  constructor(private router: Router, private produtoService: ProdutoService, private revistaService: RevistaService) { }

  produtos = new MatTableDataSource();
  
  
  displayedColumns: string[] = ['codigo', 'nome', 'porcentagem', 'revista', 'action'];
  
  ngOnInit(): void {

    let revistas: Array<Revista>;

    this.revistaService.listar().subscribe(actions => {
      revistas = actions;
    });

    this.produtoService.listar().subscribe(actions => {
      let lista = [];

      actions.forEach(function (it, index) {
        
        revistas.forEach(function (rev, index) {

          if (rev.id === it.revistaId) {
            it.revista = rev.nome;
          }
        });
        lista.push(it);
      });
      
      this.produtos = new MatTableDataSource(lista);
    });
  }

  createProduto() {
    this.router.navigate(["/produto/create"])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.produtos.filter = filterValue.trim().toLowerCase();
  }

}
