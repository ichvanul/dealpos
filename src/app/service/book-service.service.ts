import { Injectable } from '@angular/core';
import { Book } from './class/book-class';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  public data: Book[] = [];

  private itemsSubject$: BehaviorSubject<Book[]> = new BehaviorSubject(this.data);

  readonly items$: Observable<Book[]> = this.itemsSubject$.asObservable();

  constructor() { }

  add_book(item) {
    if (this.data.length > 0) {
      const newdata = {
        id: +this.data.length + 1,
        name: item.name,
        year: item.year,
        review: []
      }

      this.data.push(newdata);
    } else {
      const newdata = {
        id: 1,
        name: item.name,
        year: item.year,
        review: []
      }

      this.data.push(newdata);
    }
    console.log(item);
  }

  add_review(item, id) {

    const review = this.data.filter(x => x.id === +id);

    console.log(this.data, item, id);

    if (review[0].review.length > 0) {
      const newdata = {
        id: +review[0].review.length + 1,
        email: item.email,
        note: item.note,
        star: item.star
      }

      review[0].review.push(newdata);
    } else {
      const newdata = {
        id: 1,
        email: item.email,
        note: item.note,
        star: item.star
      }

      review[0].review.push(newdata);
    }
    console.log(this.data);
  }
}
