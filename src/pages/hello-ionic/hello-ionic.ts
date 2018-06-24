import { Component, ViewChild, EventEmitter } from '@angular/core';
import { MenuController, Nav, NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AppRouteService } from '../../app/app.service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private menu: MenuController, private nav: NavController) {}
  openElementOfList() {
    this.nav.push(ListPage, { count: 20 });
  }
}
