import { Route } from '@angular/router';
import { ProcessListComponent } from './process-list.component';

export const processListRoutes: Route[] = [
    {
        path: '',
        component: ProcessListComponent,
    }
];
