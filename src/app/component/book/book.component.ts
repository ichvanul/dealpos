import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/book-service.service';
import { Router } from '@angular/router';
import books from '../../files/book.json';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookList:{name:String, year:Number}[]=books;

  constructor(public book: BookServiceService, private router: Router) { }

  ngOnInit(): void {
    this.book.items$.subscribe(x => {if (x.length === 0) {this.router.navigate(['add-book'])} console.log(x)});
  }

  reviews(book) {
    this.router.navigate(['review-book/' + book.id]);
  }

}
