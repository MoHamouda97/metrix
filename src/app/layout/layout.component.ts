import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import { filter, map, Subject, takeUntil } from 'rxjs';
import { applyCount } from '../shared/utilis/count';
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements AfterViewInit, OnDestroy {
  pathes: any[] = [];
  unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        takeUntil(this.unsubscribeAll),
        filter(event => event instanceof NavigationEnd),
        map(() => this.route.snapshot),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route: ActivatedRouteSnapshot) => {
        this.pathes = route.data?.['urls'];
      });      
  }

  ngAfterViewInit() {
    $('#menu1').circleMenu({
      direction: 'down',
      position: {
          x: 'left',
          y: 'top'
      }
    });

    applyCount();
  } 

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();    
  }

}
