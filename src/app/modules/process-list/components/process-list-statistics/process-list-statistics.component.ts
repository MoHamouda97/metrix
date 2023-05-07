import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { applyTimeline } from 'src/app/shared/utilis/timeline';

@Component({
  selector: 'app-process-list-statistics',
  templateUrl: './process-list-statistics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessListStatisticsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    applyTimeline()
  }

}
