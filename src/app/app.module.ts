import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { EqualValidatorDirective } from './register-form/equal-validator.directive';
import { UserService } from './shared/user.service';
import { AuthenticationService } from './shared/authentication.service';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './guards/loggedin.guard'

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    EqualValidatorDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [
    UserService,
    AuthenticationService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
