import { NgIf, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { delay, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'metrix-splash-screen',
  templateUrl: './metrix-splash-screen.component.html',
  styleUrls: ['./metrix-splash-screen.component.css'],
  standalone: true,
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetrixSplashScreenComponent implements OnInit {
  show: boolean = true;
  unsubscribeAll: Subject<any> = new Subject<any>();
  
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.router.events.pipe(
      delay(500),
      takeUntil(this.unsubscribeAll)
    ).subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.show = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.show = false;

          this.document.getElementsByTagName('metrix-splash-screen')[0].remove();

          this.unsubscribeAll.next(null);
          this.unsubscribeAll.complete();
        }
      }
    )    
  }  
}
