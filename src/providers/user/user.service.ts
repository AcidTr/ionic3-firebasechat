import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../base/base.service';
import { map, catchError } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';




@Injectable()
export class UserService extends BaseService {

  currentUser: AngularFireObject<User>;
  users: Observable<any[]>;

  constructor(
    public auth: AngularFireAuth,
    public db: AngularFireDatabase,
    public http: HttpModule) {
      super();
      //this.users= db.list('users').valueChanges();

      this.listenAuthState();



  }

  private setUsers(uidToExclude: string): void {


    this.users = this.db.list(`/users`,
    ref => ref.orderByChild('name'))
    .valueChanges()
    .pipe(
      map((users: User[]) => {


        return users.filter((user: User) => user.uid !== uidToExclude);
      }),
      catchError(this.handleObservableError)
    );




  }

  private listenAuthState() : void {
    this.auth.authState
    .subscribe((authState: firebase.User) => {
      if(authState){
        console.log('Auth state alterado!');

        this.currentUser = this.db.object(`/users/${authState.uid}`);

        this.setUsers(authState.uid);
      }
    })
  }

  create(user: User): Promise<void>{
    return Promise.resolve(this.db.object(`/users/${user.uid}`)
    .set(user)
    .catch(this.handlePromiseError)
    );

  }

  userExists(username: string): Observable<boolean>{
    return this.db.list('/users', ref => ref.orderByChild('username').equalTo(username)).valueChanges()
    .pipe(
      map((users: User[]) => {

        return users.length>0;
    }),
    catchError(this.handleObservableError)
    );
  }


  get(userId: string): AngularFireObject<User>{
    return this.db.object<User>(`/users/${userId}`)

  }

}
