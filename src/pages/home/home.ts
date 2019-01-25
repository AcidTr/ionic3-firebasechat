import { AuthService } from './../../providers/auth/auth.service';
import { UserService } from './../../providers/user/user.service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';
import { ChatService } from '../../providers/chat/chat.service';
import { Chat } from '../../models/chat.model';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chats: Observable<Chat[]>;
  users: Observable<any[]>;
  view: string = 'conversas';

  constructor(
    public authService: AuthService,
    public chatService: ChatService,
    public userService: UserService,
    public navCtrl: NavController) {


  }

  ionViewCanEnter(): Promise<boolean>{
   return this.authService.authenticated;
  }


  ionViewDidLoad(){
    this.chats = this.chatService.chats;
    this.users = this.userService.users;

  }

  onSignUp(): void {
    this.navCtrl.push('SignupPage');
  }

  onChatCreate(recipientUser: User): void {
    this.userService.currentUser
    .valueChanges()
    .subscribe((currentUser: User) => {

      this.chatService.getDeepChat(currentUser.uid, recipientUser.uid)
      .valueChanges()
      .subscribe((chat: Chat) => {
        console.log(chat);

        if(chat == null){
          let timestamp = firebase.database.ServerValue.TIMESTAMP;
          console.log(currentUser.name);
          console.log(recipientUser.name);

          let chat1 = new Chat('',timestamp,recipientUser.name,'', recipientUser.uid);
          this.chatService.create(chat1, currentUser.uid, recipientUser.uid);

          let chat2 = new Chat('', timestamp, currentUser.name, '', currentUser.uid);
          this.chatService.create(chat2, recipientUser.uid, currentUser.uid);

        }

      });


    })


    this.navCtrl.push('ChatPage', {
      recipientUser: recipientUser
    })
  }

  onChatOpen(chat: Chat): void {

    let recipientUserId: string = chat.key;
    console.log('espaço');

    console.log(chat.key);

    console.log('espaço');

    this.userService.get(recipientUserId)
    .valueChanges()
    .first()
    .subscribe((user: User) => {
      console.log(user);
      console.log(user.name);

      this.navCtrl.push('ChatPage', {
        recipientUser: user
      })
    });


  }


}
