import { Observable } from 'rxjs/Observable';
import { ChatService } from './../../providers/chat/chat.service';
import { MessageService } from './../../providers/message/message.service';
import { Message } from './../../models/message.model';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AuthService } from './../../providers/auth/auth.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';
import 'rxjs/add/operator/first'
import firebase from 'firebase';
import { Chat } from '../../models/chat.model';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {


  @ViewChild(Content) content: Content;
  messages: AngularFireList<Message>;
  viewMessages: Observable<Message[]>;
  pageTitle: string;
  sender: User;
  recipient: User;

  private chat1: AngularFireObject<Chat>
  private chat2: AngularFireObject<Chat>

  constructor(
    public authService: AuthService,
    public chatService: ChatService,
    public messageService: MessageService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService) {


  }


  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    this.recipient = this.navParams.get('recipientUser');
    this.pageTitle = this.recipient.name;


    this.userService.currentUser.valueChanges()
      .first()
      .subscribe((currentUser: User) => {
        this.sender = currentUser;

        this.chat1 = this.chatService.getDeepChat(this.sender.uid, this.recipient.uid);
        this.chat2 = this.chatService.getDeepChat(this.recipient.uid, this.sender.uid);

        if(this.recipient.photo){
          this.chat1
          .valueChanges()
          .subscribe((chat: Chat) => {
            this.chatService.updatePhoto(this.chat1, chat.photo, this.recipient.photo);
          })

        }

        let doSubscription = () => {

          this.viewMessages = this.messages.valueChanges();

          this.viewMessages.subscribe((messages: Message[]) => {
            this.scrollToBottom();
          })
        }

        this.messages = this.messageService
          .getMessages(this.sender.uid, this.recipient.uid);


        this.messages.valueChanges()
          .first()
          .subscribe((messages: Message[]) => {

            if (messages.length === 0) {

              this.messages = this.messageService
                .getMessages(this.recipient.uid, this.sender.uid)

              doSubscription();
            }else {
              doSubscription();
            }

          })

      })

    /*pode usar diretamente o this.userService.currentUser.valueChanges()
    .subscribe()... , pois
    tem um objeto do tipo User com os atributos, nome, email, username
    e uid*/


  }


  sendMessage(newMessage: string): void {
    if (newMessage) {

      let currentTimestamp: Object = firebase.database.ServerValue.TIMESTAMP;
      this.messageService.create(
        new Message(
          this.sender.uid,
          newMessage,
          currentTimestamp
        ),
        this.messages
      ).then(() => {

        this.chat1.update({
          lastMessage: newMessage,
          timestamp: currentTimestamp
        });

        this.chat2.update({
          lastMessage: newMessage,
          timestamp: currentTimestamp
        });

      })
    }
  }

  private scrollToBottom(duration?: number): void {
    setTimeout(() => {
      if (this.content._scroll) {
        this.content.scrollToBottom(duration || 300);
      }

    }, 50);

  }

}
