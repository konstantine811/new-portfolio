import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CoreModule } from '../core/core.module';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    HttpModule
  ],
  declarations: [DropdownComponent],
  exports: [DropdownComponent]
})
export class SharedModule { }
