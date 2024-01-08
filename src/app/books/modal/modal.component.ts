import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/shared/interfaces/books.interface';
import { BooksService } from 'src/app/shared/services/books.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnDestroy{
  @Input() selectedBook: any;
  @Input() showModal: boolean = false;
  //@Output() submitEvent = new EventEmitter<string>();
  books!: Book[] | any[];
  //books$!: Observable<Book[] | any[]> //is when async pipe is being used
  filteredBooks!: Book[];
  bookEdit: boolean = false;
  sub!: Subscription;
  @ViewChild('inputElement', { static: false }) inputElement!: ElementRef;
  constructor(private service: BooksService, public activeModal: NgbActiveModal) { }

  getBooks(): void {
    this.service.getBooks().subscribe(data => {
      this.books = data;
      this.filteredBooks = this.books;
    })
    // this.books$ = this.service.getBooks();
    // this.filteredBooks$ = this.books$;
  }

  saveChanges() {
    if (this.selectedBook) {
      this.sub = this.service.updateBook(this.selectedBook).subscribe(() => {
        // console.log('Changes saved for book:', this.selectedBook);
        this.selectedBook = null;
        this.getBooks(); // Refresh the book list after the update
      });
    }
    this.inputElement.nativeElement.value = '';
  }

  cancel() {
    this.bookEdit = false;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
