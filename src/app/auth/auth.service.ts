import { Injectable } from '@angular/core';

import { Router } from "@angular/router";

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public fauth: AngularFireAuth) { }


  loginFirebase(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fauth.signInWithEmailAndPassword(email, password).then(
        (res) => {
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  }



}
