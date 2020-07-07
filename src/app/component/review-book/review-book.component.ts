import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/book-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from 'src/app/service/class/book-class';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-review-book',
  templateUrl: './review-book.component.html',
  styleUrls: ['./review-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ReviewBookComponent implements OnInit {

  rate: number = undefined;
  nilai: number = undefined;
  reviewForm: FormGroup;
  nomor: number;
  buku: any;

  constructor(private route: ActivatedRoute, private router: Router, public book: BookServiceService, private fb: FormBuilder,
    private cdk: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['book'];

      this.nomor = id;

      this.book.items$.subscribe(x => {if (x.length === 0) {this.router.navigate(['add-book'])}});

      console.log(this.buku);

      if (!id) {
        this.router.navigate(['book']);
        return;
      }

      this.initChangeForm();
    });
  }

  initChangeForm() {
    this.reviewForm = this.fb.group({
      email: [''],
      note: [''],
      start: ['']
    });
  }

  onSubmit(id) {
    const controls = this.reviewForm.controls;
    const data = {
      email: controls['email'].value,
      note: controls['note'].value,
      star: controls['start'].value
    };
    console.log(data);
    this.book.add_review(data, id);
    this.cdk.markForCheck()

    this.reviewForm.reset();

    this.getdata(id)
  }

  getdata(id) {
    this.book.items$.subscribe(result => {
      console.log(result, id)
      const res = result.filter(x => x.id === +id);
      this.buku = res[0];
      console.log(this.buku);
    });

    console.log(this.buku);
  }

}
