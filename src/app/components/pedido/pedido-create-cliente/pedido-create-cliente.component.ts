import { ProdutoService } from './../../produto/produto.service';
import { PedidoService } from './../pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from './../pedido';
import { RevistaService } from './../../revista/revista.service';
import { Revista } from './../../revista/revista';
import { Component, OnInit } from '@angular/core';
import { ItemPedido } from '../itemPedido';
import { Produto } from '../../produto/produto';

@Component({
  selector: 'app-pedido-create-cliente',
  templateUrl: './pedido-create-cliente.component.html',
  styleUrls: ['./pedido-create-cliente.component.css']
})
export class PedidoCreateClienteComponent implements OnInit {

  revistas: Revista[]
  pedido: Pedido
  codigo: string
  quantidade: number
  itens: ItemPedido[]
  item: ItemPedido
  clienteId: string

  displayedColumns: string[] = ['codigo', 'produto', 'quantidade', 'valor'];

  constructor(
    private revistaService: RevistaService,
    private activatedRoute: ActivatedRoute,
    private pedidoService: PedidoService,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
     
    this.clienteId = this.activatedRoute.snapshot.paramMap.get('id');

    this.revistaService.listar().subscribe(revistas =>
      this.revistas = revistas
    );

    this.pedido = new Pedido();
    this.pedido.itens = [];
    this.pedido.clienteId = this.clienteId;
    this.item = new ItemPedido();
  }

  obterProduto() {
    
    this.produtoService.obterProdutoPorCodigoRevista(this.pedido.revistaId, this.codigo).subscribe( produto =>
      this.item = {codigo: produto[0].codigo, nomeProduto: produto[0].nome}
    );
  }

  adicionarProduto(item: ItemPedido) {
    this.pedido.itens.push(item);
    this.item = new ItemPedido();
    this.codigo = "";
  }

  salvar() {
      
  }

  cancelar(): void {
    this.router.navigate(["/pedido/listByCliente/{{this.clienteId}}"]);
  }

}
