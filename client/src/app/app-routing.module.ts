import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ])],
  exports: [RouterModule]
})

export class AppRoutinModule { }
