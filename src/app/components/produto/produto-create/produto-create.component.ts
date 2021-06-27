import { RevistaService } from './../../revista/revista.service';
import { Router } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';
import { Revista } from '../../revista/revista';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})

export class ProdutoCreateComponent implements OnInit {

  produto: Produto
  revistas: Revista[]

  constructor(private produtoService: ProdutoService, private router: Router, private revistaService: RevistaService) { }

  ngOnInit(): void {
    this.produto = new Produto();
    this.revistaService.listar().subscribe(actions => {
      this.revistas = actions;
    });
  }

  salvar() {
    this.produtoService.salvar(this.produto);
    // this.produtoService.showMenssage("Produt cadastrado com sucesso");
    this.cancelar();
  }

  cancelar(): void {
    this.router.navigate(["/produto"]);
  }
}
