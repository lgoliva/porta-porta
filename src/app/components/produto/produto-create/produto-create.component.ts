import { Router } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.produto = new Produto()
  }

  salvar() {
    this.produtoService.salvar(this.produto);
    // this.produtoService.showMenssage("Produt cadastrado com sucesso");
    this.router.navigate(["/produtos"]);

  }

  cancelar(): void {
    this.router.navigate(["/produtos"]);
  }
}
