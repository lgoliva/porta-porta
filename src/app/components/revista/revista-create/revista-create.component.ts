import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RevistaService } from './../revista.service';
import { Revista } from '../revista';

@Component({
  selector: 'app-revista-create',
  templateUrl: './revista-create.component.html',
  styleUrls: ['./revista-create.component.css']
})
export class RevistaCreateComponent implements OnInit {

  revista: Revista;

  constructor(private revistaService: RevistaService, private router: Router) { }

  ngOnInit(): void {
    this.revista = new Revista()
  }

  salvar() {
    this.revistaService.salvar(this.revista);
    // this.produtoService.showMenssage("Produt cadastrado com sucesso");
    this.cancelar();
  }

  cancelar(): void {
    this.router.navigate(["/revistas"]);
  }

}
