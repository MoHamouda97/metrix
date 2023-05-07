import { AfterViewInit, Component } from '@angular/core';
import { applyScroll } from 'src/app/shared/utilis/scroll';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html'
})
export class ProcessListComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    applyScroll();
  }

}
