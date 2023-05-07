import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { finalize, first, Observable, tap } from "rxjs";
import { AppState } from "src/app/reducers";
import { getSubordinates } from "src/app/store/subordinates/subordinates.actions";
import { isSubordinatesLoaded } from "src/app/store/subordinates/subordinates.selectors";

@Injectable({
    providedIn: 'any'
})

export class SubordinatesResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.stroe
            .pipe(
                select(isSubordinatesLoaded),
                tap((subordinatesLoaded) => {
                    if (!this.loading && !subordinatesLoaded) {
                        this.stroe.dispatch(getSubordinates());
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            )
    }
}