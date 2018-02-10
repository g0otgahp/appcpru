import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PersonDetailPage } from '../person-detail/person-detail';
import { LoginPage } from '../login/login';
import { CiProvider } from "../../providers/ci";
import 'rxjs/add/operator/share';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

     PersonList: any = [];
     IMG_URL: any = "http://www.00505-429.com/@inside/appcpru/service/images/";     
  // PersonList: any = [
  //   {
  //     IDcard: '1',
  //     name: 'ดร.วิระพงศ์ จันทร์สนาม',
  //     falcuty: 'คณะบริหารธุรกิจ',
  //     phone: '0801551289',
  //     img: '1.jpg',
  //     facebook: 'https://www.facebook.com/wirapongc'
  //   },
  //   {
  //     IDcard: '2',
  //     name: 'อ.เสกศักดิ์ ปราบมาลา',
  //     falcuty: 'คณะบริหารธุรกิจ',
  //     phone: '0801551280',      
  //     img: '2.jpg',
  //     facebook: 'https://www.facebook.com/ajseksak'
  //   },
  //   {
  //     IDcard: '3',
  //     name: 'อ.สำราญ วานนท์',
  //     falcuty: 'คณะบริหารธุรกิจ',
  //     phone: '0801551289',
  //     img: '3.jpg',
  //     facebook: 'https://www.facebook.com/samran.wanon?ref=br_rs'
  //   },
  //   { 
  //     IDcard: '4',
  //     name: 'อ.รจนา วานนท์',
  //     falcuty: 'คณะบริหารธุรกิจ',
  //     phone: '0801551289',
  //     img: '4.jpg',
  //     facebook: 'https://www.facebook.com/atta.yayee?fref=nf&pnref=story'
  //   },
  //   { 
  //     IDcard: '5',
  //     name: 'อ.รัชชนัน หลาบมาลา',
  //     falcuty: 'คณะบริหารธุรกิจ',
  //     phone: '0801551289',
  //     img: '5.jpg',
  //     facebook: 'https://www.facebook.com/THE.ENJOY.MAN?ref=br_rs'
  //   }
  // ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public ci: CiProvider,) {

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

  personDetail(item:any) {
    this.navCtrl.push(PersonDetailPage,item);
  }

  LoginAdmin() {
    this.navCtrl.push(LoginPage);
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
