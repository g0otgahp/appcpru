import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { CiProvider } from '../providers/ci';
import { ConferenceData } from '../providers/conference-data';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PersonDetailPage } from '../pages/person-detail/person-detail';
import { PersonAddPage } from '../pages/person-add/person-add';
import { LoginPage } from '../pages/login/login';
import { InAdminPage } from '../pages/inadmin/inadmin';
import { PersonDetailAdminPage } from '../pages/person-detail-admin/person-detail-admin';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonDetailPage,
    PersonAddPage,
    LoginPage,
    InAdminPage,
    PersonDetailAdminPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonDetailPage,
    PersonAddPage,
    LoginPage,
    InAdminPage,
    PersonDetailAdminPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CiProvider,
    ConferenceData,
  ]
})
export class AppModule {}
