import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-person-detail',
  templateUrl: 'person-detail.html',
})
export class PersonDetailPage {

  PersonDetail:any = [];
  IMG_URL: any = "http://www.00505-429.com/@inside/appcpru/service/images/";
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,    
  ) {
  }

  CallTel(tel:number){
    window.location.href = 'tel:'+ tel;
  }

  ionViewDidLoad() {
    var item = this.navParams.data;
    this.PersonDetail = item; 
    // console.log(this.PersonDetail);
    // console.log('ionViewDidLoad PersonDetailPage');
  }

}
