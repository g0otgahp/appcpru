import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonDetailAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-person-detail-admin',
  templateUrl: 'person-detail-admin.html',
})
export class PersonDetailAdminPage {

  PersonDetail:any = [];
  IMG_URL: any = "http://www.00505-429.com/@inside/appcpru/service/images/";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  CallTel(tel:number){
    window.location.href = 'tel:'+ tel;
  }

  ionViewDidLoad() {
    console.log(this.navParams.data);
    var item = this.navParams.data;
    this.PersonDetail = item; 
    // console.log(this.PersonDetail);
    // console.log('ionViewDidLoad PersonDetailPage');
  }

}
