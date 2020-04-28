import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Revista } from './revista';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RevistaService {

  constructor(private db: AngularFireDatabase) { }

  salvar(revista: Revista) {
    this.db.list("revistas").push(revista)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  listar() {
    return this.db.list('revistas')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ id: c.payload.key, ...c.payload.val() as Revista}));
      })
    );
  }
}
