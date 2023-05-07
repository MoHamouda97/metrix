import { createAction, props } from "@ngrx/store";
import { ISubordinates } from "src/app/modules/add-hierarchy/interfaces/subordinates.interface";

export const getSubordinates = createAction(
    "[Subordinates Resolver] Get Subordinates"
);

export const subordinatesAdded = createAction(
    "[Add Subordinates] Subordinates Added",
    props<{subordinates: ISubordinates[]}>()
);

export const subordinatesLoaded = createAction(
    "[Load subordinates Effect] Subordinates Loaded",
    props<{subordinates: ISubordinates[]}>()
);