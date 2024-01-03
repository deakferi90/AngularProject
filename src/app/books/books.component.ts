import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { Book } from '../shared/interfaces/books.interface';
import { Observable, map } from 'rxjs'; //-used if async pipe subscription is being implemented
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books!: Book[] | any[]; //-  books$!: Observable<Book[] | any[]> is when async pipe is being used
  filteredBooks!: Book[]; //- filteredBooks$!: Observable<Book[]> is when async pipe is being used
  @ViewChild('inputElement', { static: false })
  inputElement!: ElementRef;
  constructor(private service: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.service.getBooks().subscribe(data => {
      this.books = data;
      this.filteredBooks = this.books;
    })
    // this.books$ = this.service.getBooks();
    // this.filteredBooks$ = this.books$;
  }

  filterBooks() {
    const val = this.inputElement.nativeElement.value.toLowerCase();
    this.filteredBooks = this.books.filter((obj) => obj.author.toLowerCase().includes(val)
      || obj.title.toLowerCase().includes(val));
    return this.filteredBooks;
    //this.filteredBooks$ = this.books$.pipe(map(books => books.filter((obj) => obj.author.toLowerCase().includes(val) || obj.title.toLowerCase().includes(val))));
  }

  deleteBook(id: number) {
    this.service.deleteBook(id).subscribe(() => this.getBooks());
  }

  // deleteBook(event: Event, id: number) {
  //   event.preventDefault();
  //   this.service.deleteBook(id).subscribe(() => {
  //     this.books$ = this.service.getBooks();
  //     this.filteredBooks$ = this.books$;
  //   }); //- is when async pipe is being used
  // }
}
