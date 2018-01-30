import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PersonDetailAdminPage } from '../person-detail-admin/person-detail-admin';
import { PersonAddPage } from '../person-add/person-add';
import { CiProvider } from "../../providers/ci";

@Component({
  selector: 'page-inadmin',
  templateUrl: 'inadmin.html'
})
export class InAdminPage {

  PersonList: any = [];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,) {

  }

  ionViewDidLoad() {
    let seq = this.ci.get('Appcpru/PersonLoad').share();
    seq.map(res => res.json())
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.error('ERROR', err);
      });
  }

  personDetail(item:any) {
    this.navCtrl.push(PersonDetailAdminPage,item);
  }

  doRefresh(refresher: any) {
    setTimeout(() => {
      // this.ionViewDidLoad();
      refresher.complete();
      const toast = this.toastCtrl.create({
        message: 'โหลดข้อมูลล่าสุดแล้ว',
        duration: 2000
      });
      toast.present();
    }, 2000);
  }
}
