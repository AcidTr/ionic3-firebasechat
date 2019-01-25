
import { AuthService } from './../../providers/auth/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../providers/user/user.service';
import 'rxjs/add/operator/first';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;

  constructor(
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService,
    public loadingCtrl: LoadingController,
    public altCtrl: AlertController) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  onSubmit(): void {

    let loading: Loading = this.showLoading();

    let formUser = this.signupForm.value;

    let username: string = formUser.username;

    this.userService.userExists(username)
      .first()
      .subscribe((userExists: boolean) => {
        if (!userExists) {

          this.authService.createAuthUser({
            email: formUser.email,
            password: formUser.password
          }).then(() => {

            delete formUser.password;

            formUser.uid = this.authService.auth.auth.currentUser.uid;

            this.userService.create(formUser)
              .then(() => {
                console.log('Usuário cadastrado!');
                this.navCtrl.setRoot('HomePage');
                loading.dismiss();
              }).catch((e: any) => {
                console.log(e);
                loading.dismiss();
                this.showAlert(e);

              });




            /*
            if(this.authService.result){

              delete formUser.password;
              formUser.uid = this.authService.auth.

              this.userService.create(formUser)
              .then(() => {
                console.log('Usuario cadastro!');

              }).catch(error => {
                console.log('Erro ao registrar usuário', error);

              })

              this.navCtrl.setRoot('HomePage');
            }else{
              console.log('Erro ao cadastrar usuário!');

            }*/
          }).catch((e: any) => {
            console.log(e);
            loading.dismiss();
            this.showAlert(e);

          });

        } else {
          this.showAlert(`Username: ${username} não está disponível`);
          loading.dismiss();
        }
      });




  }

  private showLoading(): Loading {
    let ld: Loading = this.loadingCtrl.create({
      content: 'Por favor aguarde!'
    });

    ld.present();

    return ld;
  }


  private showAlert(message: string): void {
    this.altCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }



}
