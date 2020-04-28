import { Injectable } from '@angular/core';

import { Produto } from './produto.model';
import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private db: AngularFireDatabase) { }

  salvar(produto: Produto) {
    this.db.list("produtos").push(produto)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  listar() {
    return this.db.list('produtos')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ id: c.payload.key, ...c.payload.val() as Produto}));
      })
    );
  }
}
