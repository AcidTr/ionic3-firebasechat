import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Message } from '../../models/message.model';
import { BaseService } from '../base/base.service';


@Injectable()
export class MessageService extends BaseService {

  constructor(
    public db: AngularFireDatabase,
    public http: HttpModule) {
    super();
  }

  create(message: Message, listMessages: AngularFireList<Message>): Promise<void> {
    return Promise.resolve(listMessages.push(message));
  }

  getMessages(userId1: string, userId2: string): AngularFireList<Message> {
     /*return this.db.list(`/messages/${userId1}-${userId2}`,
      ref => ref.limitToLast(30).orderByChild('timestamp'))
      .valueChanges()
      .pipe(
        map((messages: Message[]) => {
         return messages;
        }),
        catchError(this.handleObservableError)
      );*/

    return this.db.list(`/messages/${userId1}-${userId2}`,
      (ref) => ref.limitToLast(30).orderByChild('timestamp')
    )

  }

}
