import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Chat } from '../../models/chat.model';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class ChatService extends BaseService {

  chats: Observable<Chat[]>;

  constructor(
    public db: AngularFireDatabase,
    public af: AngularFireAuth,
    public http: HttpModule) {
    super();
    this.setChats();
  }

  private setChats(): void {
    this.af.authState
    .subscribe((authState: firebase.User) => {
      if(authState){

        this.chats = this.db.list(`/chats/${authState.uid}`, ref =>
        ref.orderByChild('timestamp'))
        .valueChanges()
        .pipe(
          map((chats: Chat[]) => {
            return chats.reverse();
          }),
          catchError(this.handleObservableError)
        )

      }
    })

  }

  create(chat: Chat, userId1: String, userId2: string): Promise<void>{
    return this.db.object(`/chats/${userId1}/${userId2}`)
    .set(chat)
    .catch(this.handlePromiseError);
  }


  getDeepChat(userId1: string, userId2: string): AngularFireObject<Chat>{
    return this.db.object<Chat>(`/chats/${userId1}/${userId2}`);
  }

  updatePhoto(chat: AngularFireObject<Chat>, chatPhoto: string, recipientUserPhoto: string): Promise<boolean> {
    if(chatPhoto !== recipientUserPhoto) {
      return chat.update({
        photo: recipientUserPhoto
      }).then(() => {
        return true;
      }).catch(this.handlePromiseError);
    }
    return Promise.resolve(false);
  }

}
