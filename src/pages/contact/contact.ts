import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { PersonAddPage } from '../person-add/person-add';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }

  personAdd(){
    const toast = this.toastCtrl.create({
      message: 'เข้าสู่ระบบเจ้าหน้าที่',
      duration: 2000
    });
    toast.present();
    this.navCtrl.push(PersonAddPage);
  }
}
