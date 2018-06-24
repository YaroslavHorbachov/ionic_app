import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppRouteService {
  private currentPage: BehaviorSubject<any> = new BehaviorSubject(null);
  public setPage(component) {
    this.currentPage.next(component);
  }
  public get listenChange() {
    return this.currentPage;
  }
}
