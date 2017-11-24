import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//module
import { AppRoutinModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutinModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
