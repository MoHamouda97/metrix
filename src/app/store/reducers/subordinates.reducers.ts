import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, State } from "@ngrx/store";
import { SubordinatesActions } from "../subordinates/subordinates.action-types";

export interface SubordinatesState extends EntityState<any> {
    subordinatesLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: subordinates => subordinates.ID
})

export const initSubordinates = adapter.getInitialState({
    subordinatesLoaded: false
})

export const SubordinatesReducer = createReducer(
    initSubordinates,
    on(SubordinatesActions.subordinatesLoaded, (state, action) => adapter.addMany(action.subordinates, {...state, subordinatesLoaded: true})),
    on(SubordinatesActions.subordinatesAdded, (state, action) => adapter.addMany(action.subordinates, {...state, subordinatesLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();