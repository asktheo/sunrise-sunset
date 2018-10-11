import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { SunrisesunsetComponent } from './sunrisesunset/sunrisesunset.component';
import {SunServiceService} from './sunrisesunset/sun-service.service';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SunrisesunsetComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [HttpClientModule, SunServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
