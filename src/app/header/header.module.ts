import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './component/nav/nav.component';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavComponent
  ]
})
export class HeaderModule { }
