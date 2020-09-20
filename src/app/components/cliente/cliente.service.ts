import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from './cliente';

import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private snackBar: MatSnackBar, private db: AngularFireDatabase) {}

  showMenssage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  salvar(cliente: Cliente) {
    this.db.list("clientes").push(cliente)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  listar() {
    return this.db.list('clientes')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ id: c.payload.key, ...c.payload.val() as Cliente}));
      })
    );
  }

  obterCliente(clienteId) {
    return this.db.object('clientes/'+clienteId).snapshotChanges().pipe(
      map(res => ({ id: res.payload.key, ...res.payload.val() as Cliente} as Cliente))
    );
  }
}
