import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthService,
    ]
})

export class AuthModule {}