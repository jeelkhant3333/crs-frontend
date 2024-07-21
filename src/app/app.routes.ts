import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OtpVerificationComponent } from './shared/otp-verification/otp-verification.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './customer/user-dashboard/user-dashboard.component';
import { authGuard } from './auth/guards/auth.guard';
import { AddCarComponent } from './admin/add-car/add-car.component';

export const routes: Routes = [
    {path:"",component:DashboardComponent,canActivate:[authGuard]},
    // {path:"admin/dashboard",component:DashboardComponent,canActivate:[authGuard]},
    {path:"admin/add",component:AddCarComponent,canActivate:[authGuard]},
    {path:"u/dashboard",component:UserDashboardComponent},
    {path:"login" , component:LoginComponent},
    {path:"register" , component:RegisterComponent},
    {path:"verify" , component:OtpVerificationComponent},

];
