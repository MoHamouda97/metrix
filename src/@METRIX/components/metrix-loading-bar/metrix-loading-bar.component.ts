import { DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MetrixLoadingService } from 'src/@METRIX/services/loading/loading.service';

@Component({
  selector: 'metrix-loading-bar',
  templateUrl: './metrix-loading-bar.component.html',
  styleUrls: ['./metrix-loading-bar.component.css'],
  standalone: true,
  imports: [NgIf] 
})
export class MetrixLoadingBarComponent {
  progress: number = 0;
  show: boolean = false;
  unsubscribeAll: Subject<any> = new Subject<any>();

  constructor (
    @Inject(DOCUMENT) private document: any, 
    private metrixLoadingService: MetrixLoadingService) {}

    ngOnInit(): void {
      // Subscribe to the service
      this.metrixLoadingService.show$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((value: any) => {
          this.show = value;
  
          if (this.show) {
            this.document.body.classList.add('h-screen', 'overflow-hidden');
          } else {
            this.document.body.classList.remove('h-screen', 'overflow-hidden');
          }
      });
    }
   
    ngOnDestroy(): void {
      this.unsubscribeAll.next(null);
      this.unsubscribeAll.complete();
    }      
}
