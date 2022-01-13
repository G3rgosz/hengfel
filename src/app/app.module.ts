/*
* File: app.module.ts
* Author: Szivák Gergő
* Copyright: 2022, Szivák Gergő
* Group: Szoft II/N
* Date: 2022-01-13
* Github: https://github.com/Gergosz-2000/hengfel
* Licenc: GNU GPL
*/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
