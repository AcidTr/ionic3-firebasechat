import { AuthService } from './../../providers/auth/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';


@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  currentUser: User;
  canEdit: boolean = false;
  uploadProgress: number;
  private filePhoto: File;

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService) {
  }

  ionViewCanEnter(): Promise<boolean>{
   return this.authService.authenticated;
  }

  ionViewDidLoad() {

    this.userService.currentUser.valueChanges()
    .subscribe((user: User) => {
      this.currentUser = user;
    })

  }

  onSubmit(event: Event):void{
    event.preventDefault();

    if(this.filePhoto){

      let uploadTask = this.userService.uploadPhoto(this.filePhoto, this.currentUser.uid);

      uploadTask.on('state_changed', (snapshot: firebase.storage.UploadTaskSnapshot) => {

        this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

      }, (error: Error) => {

      }, () =>{
        uploadTask.snapshot.ref.getDownloadURL()
        .then((downloadURL: string) => {
          this.editUser(downloadURL);
        })

      })
    }else{
      this.editUser();
    }


  }

  onPhoto(event): void {

    this.filePhoto = event.target.files[0]

  }

  private editUser(photoURL?: string): void {

    this.userService
    .edit({
      name:this.currentUser.name,
      username: this.currentUser.username,
      photo: photoURL || this.currentUser.photo || ''
    })
    .then(() => {
      this.canEdit = false;
      this.filePhoto = undefined;
      this.uploadProgress = 0;
    })
  }

}
