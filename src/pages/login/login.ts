import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InAdminPage } from '../inadmin/inadmin';
import { CiProvider } from "../../providers/ci";
import 'rxjs/add/operator/share';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  submitted = false;
  login: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public ci: CiProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSubmit() {
    var param = this.login;
    let seq = this.ci.post('App/CheckLogin', param).share();
    seq.map(res => res.json())
      .subscribe(res => {
        console.log(res);        
        if (res.CheckLogin.Data > 0) {
          let alert = this.alertCtrl.create({
            title: 'Admin',
            subTitle: 'คุณได้เข้าสู่ระบบการจัดการแอดมิน',
            buttons: ['ตกลง']
          });
          alert.present();
          this.navCtrl.push(InAdminPage);    
        } else {
          this.dontPass();
        }
      }, err => {
        console.error('ERROR', err);
      });
  }

  dontPass() {
    let alert = this.alertCtrl.create({
      subTitle: 'รหัสผ่านไม่ถูกต้อง',
      buttons: ['ตกลง']
    });
    alert.present();
    this.navCtrl.pop()
  }

}
