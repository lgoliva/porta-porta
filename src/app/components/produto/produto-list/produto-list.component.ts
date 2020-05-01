import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  constructor(private router: Router, private produtoService: ProdutoService) { }

  produtos = new MatTableDataSource();
  
  displayedColumns: string[] = ['codigo', 'nome', 'porcentagem', 'action'];
  
  ngOnInit(): void {
    this.produtoService.listar().subscribe(actions => {
      this.produtos = new MatTableDataSource(actions);
    });
  }

  createProduto() {
    this.router.navigate(["/produtos/create"])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.produtos.filter = filterValue.trim().toLowerCase();
  }

}
