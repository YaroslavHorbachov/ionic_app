import { Component, ViewChild, OnInit } from '@angular/core';

import { Platform, MenuController, Nav, Toolbar } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppRouteService } from './app.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Toolbar) toolbar: Toolbar;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private routeChange: AppRouteService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }
  ngOnInit() {
    this.routeChange.listenChange.subscribe(
      component => console.log(component) || (component && this.nav.setRoot(component))
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    /*  let interval;
    setTimeout(() => clearInterval(interval), 5000);
    interval = setInterval(() => {
      this.menu.isOpen() ? this.menu.close() : this.menu.open();
    }, 500); */
    console.log(this);
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component, { count: 15 });
  }
}
