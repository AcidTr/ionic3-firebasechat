import { HttpModule } from '@angular/http';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BaseService } from '../base/base.service';

import 'rxjs/add/operator/first'



@Injectable()
export class AuthService extends BaseService {

  //result;
  user : any;

  constructor(
    public auth: AngularFireAuth,
    public http: HttpModule) {
      super();

      auth.authState.subscribe(user => {
        this.user = user;
      })

    console.log('Hello AuthProvider Provider');
  }

  /*
  async signUp(user: {email:string, password: string}){
    try{
      this.result = await this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)


    }
    catch(err) {
      console.log('Error', err);


    }
  }*/

  createAuthUser (user: {email: string, password: string}): Promise<firebase.auth.UserCredential> {
    return this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .catch(this.handlePromiseError);

  }

  signinWithEmail(user: {email: string, password: string}): Promise<boolean>{
    return this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
    .then((authState: firebase.auth.UserCredential) =>{
      return authState.user != null;
    }).catch(this.handlePromiseError);
  }

  logout(): Promise<void> {
    return this.auth.auth.signOut();
  }

  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth.authState
      .first()
      .subscribe((authState: firebase.User) =>{
        (authState)?resolve(true):reject(false)
      })

    })
  }

}
