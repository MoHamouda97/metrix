import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubordinatesReducer } from 'src/app/store/reducers/subordinates.reducers';
import { SubordinatesEffect } from 'src/app/store/subordinates/subordinates.effect';
import { AddHierarchyComponent } from './add-hierarchy.component';
import { addHierarchyRoutes } from './add-hierarchy.routing';
import { SubordinatesService } from './services/subordinates.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HierarchyInfoComponent } from './components/hierarchy-info/hierarchy-info.component';
import { UserDefinedComponent } from './components/user-defined/user-defined.component';
import { ResponsibilitiesComponent } from './components/responsibilities/responsibilities.component';
import { SubordinatesComponent } from './components/subordinates/subordinates.component';
import { LinkObjectsComponent } from './components/link-objects/link-objects.component';
import { LinkApiComponent } from './components/link-api/link-api.component';

@NgModule({
    declarations: [
        AddHierarchyComponent,
        HierarchyInfoComponent,
        UserDefinedComponent,
        ResponsibilitiesComponent,
        SubordinatesComponent,
        LinkObjectsComponent,
        LinkApiComponent
    ],
    imports: [
        RouterModule.forChild(addHierarchyRoutes), 
        EffectsModule.forFeature([
            SubordinatesEffect
        ]),
        StoreModule.forFeature('Subordinates', SubordinatesReducer),          
        SharedModule
    ],
    providers: [
        SubordinatesService
    ]
})
export class AddHierarchyModule {}
