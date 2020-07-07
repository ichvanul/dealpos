import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private book_service: BookServiceService) { }

  ngOnInit(): void {
    this.initChangeForm();
    this.book_service.items$.subscribe(res => console.log(res));
  }

  initChangeForm() {
    this.bookForm = this.fb.group({
      name: [''
    ],
    year: ['']
  });
  }

  onSubmit() {
    const controls = this.bookForm.controls;
    const data = {
      name: controls['name'].value,
      year: controls['year'].value
    };
    console.log(data);
    this.book_service.add_book(data);

    this.bookForm.reset();
  }

}
