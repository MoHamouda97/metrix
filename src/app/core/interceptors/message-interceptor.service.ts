import { Injectable } from '@angular/core';
import { IResponse } from './../../shared/interfaces/response.interface';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class MessageHttpInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {      
      return next.handle(req)
      .pipe(
        tap(
          (res) => this.handelMessage(res), 
          (err) => this.toastr.error(err.message)
        )       
      )
    }

    /**
     * This is a comment from my new keyboard
     */

   handelMessage(res: any) {    
      if (res instanceof HttpResponse) { 
        const response: IResponse = (res.body as any);
        
        if (response.code != 1) this.toastr.warning(response.message);
      }
    }

}
