import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './component.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReviewBookComponent } from './review-book/review-book.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-book',
        pathMatch: 'full'
      },
      {
        path: 'book',
        component: BookComponent
      }, 
      {
        path: 'add-book',
        component: AddBookComponent
      },
      {
        path: 'review-book/:book',
        component: ReviewBookComponent
      },
      {
        path: 'review-book',
        component: ReviewBookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
