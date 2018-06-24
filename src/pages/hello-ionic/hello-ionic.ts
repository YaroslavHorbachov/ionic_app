import { Component, ViewChild, EventEmitter } from '@angular/core';
import { MenuController, Nav } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AppRouteService } from '../../app/app.service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private menu: MenuController, private routeChange: AppRouteService) {}
  openElementOfList() {
    this.routeChange.setPage(ListPage);
  }
}
