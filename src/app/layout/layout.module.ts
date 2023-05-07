import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MetrixLoadingBarComponent } from 'src/@METRIX/components/metrix-loading-bar/metrix-loading-bar.component';
import { MetrixLoadingModule } from 'src/@METRIX/services/loading/loading.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        NavComponent,
        ProfileComponent,
        MenuComponent,
        BreadcrumbComponent
    ],
    imports: [
        RouterModule,
        MetrixLoadingBarComponent,
        MetrixLoadingModule,
        SharedModule
    ],
    exports: []
})
export class LayoutModule {}
