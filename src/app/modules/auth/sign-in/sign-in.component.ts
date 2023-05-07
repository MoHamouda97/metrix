import { AuthService } from '../../../core/auth/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IResponse } from 'src/app/shared/interfaces/response.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, catchError, finalize, of, switchMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit, OnDestroy {
  signInForm!: FormGroup;
  destroy$ = new Subject();

  constructor(
    private router: Router, 
    private service: AuthService) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', Validators.required),
    })
  }

  get email() { 
    return this.signInForm.get('email'); 
  }

  get password() { 
    return this.signInForm.get('password'); 
  }
  
  signIn() {
    if (this.signInForm.valid) {
      this.signInForm.disable();

      of(this.signInForm.value)
        .pipe(
          takeUntil(this.destroy$),
          switchMap((value) => this.service.login(value)),
          tap((res: IResponse) => {
            if (res.code === 1) {
              window.sessionStorage.setItem('token', res.data.accessToken)
              this.router.navigate(['app/form-builder']);
            } 
          }),
          finalize(() => this.signInForm.enable())
        ).subscribe();
    }
  } 
  
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  
}
