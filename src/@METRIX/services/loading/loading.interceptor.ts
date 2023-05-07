import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { MetrixLoadingService } from './loading.service';

@Injectable()
export class MetrixLoadingInterceptor implements HttpInterceptor {
    handleRequestsAutomatically: boolean = false;

    constructor(private metrixLoadingService: MetrixLoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.metrixLoadingService.show();

        return next.handle(req).pipe(
            finalize(() => {
                this.metrixLoadingService.hide();
            }));
    }
}
