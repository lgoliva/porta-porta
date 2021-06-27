import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private db: AngularFireDatabase, private router: Router) { }

  obterPorCliente(clienteId) {
    return this.db.list('pedidos', item => item.orderByChild('clienteId').equalTo(clienteId))
    .snapshotChanges()
    .pipe(
      map(changes => {
          return changes.map(c => ({ id: c.payload.key, ...c.payload.val() as Pedido}));
        }
      )
    )
  }

}
