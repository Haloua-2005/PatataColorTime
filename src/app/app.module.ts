import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompenentComponent } from './new-compenent/new-compenent.component';
import { FormsModule } from '@angular/forms';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { PATATAColorTimeComponent } from './patata-color-time/patata-color-time.component'

@NgModule({
  declarations: [
    AppComponent,
    NewCompenentComponent,
    FatherComponent,
    SonComponent,
    PATATAColorTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
