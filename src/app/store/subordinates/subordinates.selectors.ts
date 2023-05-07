import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromSubordinates from "../reducers/subordinates.reducers";
import { SubordinatesState } from "../reducers/subordinates.reducers";

export const selectSubordinatesState = createFeatureSelector<SubordinatesState>('Subordinates');

export const selectAllSubordinates = createSelector(
    selectSubordinatesState,
    fromSubordinates.selectAll
)

export const isSubordinatesLoaded = createSelector(
    selectSubordinatesState,
    state => state.subordinatesLoaded
)