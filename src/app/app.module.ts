import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgNumber2wordsModule } from 'ng-number2words';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgNumber2wordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
