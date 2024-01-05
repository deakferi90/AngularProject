import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/books.interface';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Input() selectedBook: any;
  @Input() showModal: boolean = false;
  //@Output() submitEvent = new EventEmitter<string>();
  books!: Book[] | any[];
  //books$!: Observable<Book[] | any[]> //is when async pipe is being used
  filteredBooks!: Book[];
  bookEdit: boolean = false;
  @ViewChild('inputElement', { static: false }) inputElement!: ElementRef;
  constructor(private service: BooksService) { }

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
      this.service.updateBook(this.selectedBook).subscribe(() => {
        // console.log('Changes saved for book:', this.selectedBook);
        this.selectedBook = null;
        this.getBooks(); // Refresh the book list after the update
      });
    }
    this.inputElement.nativeElement.value = '';
  }

  cancel() {
    // this.scrollPage.nativeElement.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });
    this.bookEdit = false;
  }

  // onSubmit() {
  //   this.submitEvent.emit(this.selectedBook);
  // }
}
