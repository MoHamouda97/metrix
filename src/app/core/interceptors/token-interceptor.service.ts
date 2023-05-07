import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class TokenHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        const token = sessionStorage.getItem('token');

        if (token) {
            req = req.clone({
                setHeaders: {Authorization: `Bearer ${token}`}
            })
        }

        return next.handle(req)
    }
}
