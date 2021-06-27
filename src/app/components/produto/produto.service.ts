import { Injectable } from '@angular/core';

import { Produto } from './produto';
import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';
import { Revista } from '../revista/revista';

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
          return changes.map(c => 
            //let revista = this.buscarRevista(c.payload.val().revistaId);
            ({ id: c.payload.key, ...c.payload.val() as Produto})
          );
        }
      )
    );
  }

  listarPorRevista(revistaId: string) {
    return this.db.list('produtos', item => item.orderByChild('revistaId').equalTo(revistaId))
    .snapshotChanges()
    .pipe(
      map(changes => {
          return changes.map(c => ({ id: c.payload.key, ...c.payload.val() as Produto}));
        }
      )
    )
  }

  buscarRevista(revistaId: string) {
    return this.db.object('revistas/'+revistaId).snapshotChanges().pipe(
      map(res => ({ id: res.payload.key, ...res.payload.val() as Revista} as Revista))
    );
  }

  obterProdutoPorCodigoRevista(revistaId: string, codigo: string) {
    return this.db.list('produtos', item => item.orderByChild('revistaId').equalTo(revistaId))
    .snapshotChanges()
    .pipe(
      map(changes => {
          return changes.map(c => ({ id: c.payload.key, ...c.payload.val() as Produto}));
        }
      )
    )
  }
}
