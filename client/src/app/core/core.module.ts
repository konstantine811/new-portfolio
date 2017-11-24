import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LangService } from './services/lang-service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [LangService],
  declarations: []
})
export class CoreModule { }
