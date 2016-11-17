import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
import { LoggedInGuard } from './guards/loggedin.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [LoggedInGuard] },//pathMatch: 'full', redirectTo: 'login' },
    { path: 'home', pathMatch: 'full', redirectTo: '/', canActivate: [LoggedInGuard]},
    { path: 'login', component: LoginFormComponent },// component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [RegisterFormComponent, LoginFormComponent]