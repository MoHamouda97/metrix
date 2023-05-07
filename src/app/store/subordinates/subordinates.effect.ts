import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { SubordinatesService } from 'src/app/modules/add-hierarchy/services/subordinates.service';
import { SubordinatesActions } from './subordinates.action-types';
import { subordinatesLoaded } from './subordinates.actions';

@Injectable()

export class SubordinatesEffect {

    loadSubordinates$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(SubordinatesActions.getSubordinates),
                concatMap(action =>  {
                    return this.service.getAll()
                }),
                map(subordinates => subordinatesLoaded({subordinates}))
            )
    )

    constructor(private actions$: Actions, private service: SubordinatesService) {}

}
