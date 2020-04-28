import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth/auth';
import * as firebase from 'firebase/app';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authService: AngularFireAuth) { }
  
  // doGoogleLogin(){
  //   return new Promise<any>((resolve, reject) => {
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     this.authService.au
  //     .signInWithPopup(provider)
  //     .then(res => {
  //       resolve(res);
  //     })
  //   })
  // }

  loginPorUsuario(usuario: Usuario) {
    firebase.auth().signInWithEmailAndPassword(usuario.username, usuario.passowrd).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    
  }
}
