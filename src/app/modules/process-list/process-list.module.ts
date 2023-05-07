import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProcessListComponent } from './process-list.component';
import { processListRoutes } from './process-list.routing';
import { ProcessListStatisticsComponent } from './components/process-list-statistics/process-list-statistics.component';
import { ProcessListTablistComponent } from './components/process-list-tablist/process-list-tablist.component';
import { NgxDropzoneModule } from 'ngx-dropzone';  

@NgModule({
    declarations: [
        ProcessListComponent,
        ProcessListStatisticsComponent,
        ProcessListTablistComponent
    ],
    imports: [
        RouterModule.forChild(processListRoutes), 
        NgxDropzoneModule,   
        SharedModule
    ]
})
export class ProcessListModule {}
