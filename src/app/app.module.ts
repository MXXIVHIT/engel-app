import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { ManagerComponent } from './components/manager/manager.component';
import { FormtestComponent } from './components/formtest/formtest.component';
import {HeroFormReactiveComponent} from './components/reactive/hero-form-reactive.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './data/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    FormtestComponent,
    HeroFormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
