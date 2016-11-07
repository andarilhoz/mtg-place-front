import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
