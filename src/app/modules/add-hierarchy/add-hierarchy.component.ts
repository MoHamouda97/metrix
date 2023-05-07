import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, catchError, map, of } from 'rxjs';
import { selectAllSubordinates } from 'src/app/store/subordinates/subordinates.selectors';
import { ISubordinates } from './interfaces/subordinates.interface';
import { AppState } from 'src/app/reducers';
import { applyNext, applyPrevious, applySteps } from 'src/app/shared/utilis/steps';
import { applyScroll } from 'src/app/shared/utilis/scroll';
import { subordinatesAdded } from 'src/app/store/subordinates/subordinates.actions';
import { SubordinatesService } from './services/subordinates.service';

@Component({
  selector: 'app-add-hierarchy',
  templateUrl: './add-hierarchy.component.html',
  styleUrls: ['./add-hierarchy.component.css']
})
export class AddHierarchyComponent implements OnInit, AfterViewInit {
  subordinates$: Observable<ISubordinates[]>;
  SUBORDINATES_LIST: ISubordinates[];

  constructor(private store: Store<AppState>, private service: SubordinatesService) {
    this.SUBORDINATES_LIST = this.service.getSubordinates();
  }

  ngOnInit(): void {
    this.subordinates$ = this.store.pipe(
      select(selectAllSubordinates),
      map(subordinates => {
        return subordinates ? subordinates : []
      }),
      catchError(err => {
        return of([])
      })
    )
  }   

  ngAfterViewInit(): void {
    applySteps();
    applyNext();
    applyPrevious();
    applyScroll();
  }

  addSubordinate(subordinates: ISubordinates[]) {
    this.store.dispatch(subordinatesAdded({subordinates}));
    this.service.removeSubordinates(subordinates);
    this.SUBORDINATES_LIST = this.service.getSubordinates();
  }

}