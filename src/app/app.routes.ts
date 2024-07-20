import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OtpVerificationComponent } from './shared/otp-verification/otp-verification.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

export const routes: Routes = [
    {path:"",component:DashboardComponent},
    {path:"login" , component:LoginComponent},
    {path:"register" , component:RegisterComponent},
    {path:"verify" , component:OtpVerificationComponent},

];
