import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: LoginFormComponent },//pathMatch: 'full', redirectTo: 'login' },
    { path: 'home',component: HomeComponent },
    { path: 'login', pathMatch: 'full', redirectTo: '/' },// component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [RegisterFormComponent, LoginFormComponent]