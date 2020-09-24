import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VeI18nModule } from 've-i18n';
import { IvyI18nModule } from 'ivy-i18n';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VeI18nModule,
    IvyI18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
