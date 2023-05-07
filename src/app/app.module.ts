import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetrixSplashScreenComponent } from 'src/@METRIX/components/metrix-splash-screen/metrix-splash-screen.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { ExtraOptions, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { appRoutes } from './app.routing';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),    
    MetrixSplashScreenComponent,
    CoreModule,   
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
