import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompenentComponent } from './new-compenent/new-compenent.component';
import { FormsModule } from '@angular/forms';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { PATATAColorTimeComponent } from './patata-color-time/patata-color-time.component';
import { CVcompenentComponent } from './cvcompenent/cvcompenent.component';
import { ListComponent } from './list/list.component';
import { Item1Component } from './item1/item1.component';
import { DetailqComponent } from './detailq/detailq.component';
import { AttributeDirectivesComponent } from './directives/attribute-directives/attribute-directives.component'

@NgModule({
  declarations: [
    AppComponent,
    NewCompenentComponent,
    FatherComponent,
    SonComponent,
    PATATAColorTimeComponent,
    CVcompenentComponent,
    ListComponent,
    Item1Component,
    DetailqComponent,
    AttributeDirectivesComponent
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
