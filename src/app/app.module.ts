import { ComponentsModule } from './../components/components.module';
import { AuthService } from './../providers/auth/auth.service';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth'

import { UserService } from '../providers/user/user.service';
import { ChatService } from '../providers/chat/chat.service';
import { MessageService } from '../providers/message/message.service';



export const firebaseAppConfig = {
  apiKey: "AIzaSyCveZVivq1cUx7iCkMDAy77aM5wSMCxarU",
  authDomain: "ionic3-firebase-chat-bf623.firebaseapp.com",
  databaseURL: "https://ionic3-firebase-chat-bf623.firebaseio.com",
  projectId: "ionic3-firebase-chat-bf623",
  storageBucket: "ionic3-firebase-chat-bf623.appspot.com",
  messagingSenderId: "856946055725"

};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    ComponentsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserService,
    ChatService,
    MessageService,

  ]
})
export class AppModule { }
