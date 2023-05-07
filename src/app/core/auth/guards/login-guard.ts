import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})

export class LoginGuard implements CanActivate {

    constructor(private router: Router, private toastr: ToastrService) {}

    async canActivate(router: any, state: RouterStateSnapshot) {
        const token = sessionStorage.getItem('token');

        if (!token) return true;

        this.router.navigate([`/app/process-list`]);

        this.toastr.warning('You are already logged in!!')

        return false;
    }

}