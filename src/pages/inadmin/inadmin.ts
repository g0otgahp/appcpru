import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PersonDetailAdminPage } from '../person-detail-admin/person-detail-admin';
import { PersonAddPage } from '../person-add/person-add';
import { CiProvider } from "../../providers/ci";
import 'rxjs/add/operator/share';

@Component({
  selector: 'page-inadmin',
  templateUrl: 'inadmin.html'
})
export class InAdminPage {

  PersonList: any = [];
  IMG_URL: any = "http://www.00505-429.com/@inside/appcpru/service/images/";
  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public ci: CiProvider,    
  ) {

  }

  ionViewWillEnter() {
    console.log('loading...');
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    let seq = this.ci.get('App/PersonLoad').share();
    seq.map(res => res.json())
      .subscribe(res => {
        this.PersonList = res.PersonList.Data;
        console.log(res);
      }, err => {
        console.error('ERROR', err);
      });
  }

  personDetailAdmin(item:any) {
    console.log(item);
    this.navCtrl.push(PersonDetailAdminPage,item);
  }

  personAdd() {
    this.navCtrl.push(PersonAddPage);
  }

  doRefresh(refresher: any) {
    setTimeout(() => {
      this.ionViewDidLoad();
      refresher.complete();
      const toast = this.toastCtrl.create({
        message: 'โหลดข้อมูลล่าสุดแล้ว',
        duration: 2000
      });
      toast.present();
    }, 2000);
  }
}
