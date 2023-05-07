import { Route } from '@angular/router';
import { SubordinatesResolver } from './resolvers/subordinates.resolver';
import { AddHierarchyComponent } from './add-hierarchy.component';

export const addHierarchyRoutes: Route[] = [
    {
        path: '',
        component: AddHierarchyComponent,
        resolve: {
            subordinates: SubordinatesResolver
        }
    }
];
