import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MetrixLoadingInterceptor } from './loading.interceptor';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MetrixLoadingInterceptor,
            multi: true
        }
    ]
})
export class MetrixLoadingModule {}
