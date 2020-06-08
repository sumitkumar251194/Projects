import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import {EBSModule} from  './ebs/ebs.module';
import { RMSModule } from './rms/rms.module';


@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent
  ],
  imports: [
    BrowserModule,
    EBSModule,
    RMSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
