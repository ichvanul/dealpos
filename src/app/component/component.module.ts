import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReviewBookComponent } from './review-book/review-book.component';
import { ComponentComponent } from './component.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [ComponentComponent, BookComponent, AddBookComponent, ReviewBookComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    BarRatingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentModule { }
