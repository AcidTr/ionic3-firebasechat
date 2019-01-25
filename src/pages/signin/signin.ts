import { AuthService } from './../../providers/auth/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public altCtrl: AlertController,
    public authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  onSubmit(): void {

    let loading: Loading = this.showLoading();

    this.authService.signinWithEmail(this.signinForm.value)
    .then((isLogged: boolean) =>{
      if(isLogged){
        this.navCtrl.setRoot('HomePage');
        loading.dismiss();
      }

    }).catch((error: any) => {
      console.log(error);
      loading.dismiss();
      this.showAlert(error);

    });
  }

  onSignUp(): void {
    this.navCtrl.push('SignupPage');
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

  onHomePage(): void {
    this.navCtrl.push('HomePage')
    .then((hasAccess: boolean) => {
      if(hasAccess){
        console.log('Autorizado: ', hasAccess);

      }else{

        console.log('Não autorizado', hasAccess);
      }

    }).catch(err => {
      console.log('Erro', err);

    });
  }

  onLogOut(){
    console.log(this.authService.user);

    this.authService.logout()
    .then(() =>{
      console.log(this.authService.user);

    });

  }

}
