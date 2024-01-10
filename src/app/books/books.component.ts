// 
import {  Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { Book } from '../shared/interfaces/books.interface';
//import { Observable, map } from 'rxjs'; -used if async pipe subscription is being implemented
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements AfterViewInit {
  books!: Book[] | any[];
  //books$!: Observable<Book[] | any[]> //is when async pipe is being used
  filteredBooks!: Book[];
  //filteredBooks$!: Observable<Book[]> //is when async pipe is being used
  @ViewChild('inputElement', { static: false }) inputElement!: ElementRef;
  @ViewChild('scrollPage') scrollPage!: ElementRef;
  // @ViewChild('editForm') editForm!: ElementRef;
  selectedBook: any;
  selectedBookIndex: number | null = null;
  bookEdit: boolean = false;
  constructor(private service: BooksService) { }

  scrollToTop() {
    this.bookEdit = false;
  }

  ngAfterViewInit(): void {
    this.getBooks();
  }

  saveChanges() {
    let sideNav = document.querySelector('.mat-sidenav');
    if (this.selectedBook) {
      this.service.updateBook(this.selectedBook).subscribe(() => {
        this.selectedBook = null;
        this.getBooks(); // Refresh the book list after the update
      });
    }
    let editb = document.querySelector('.modal');
    editb?.classList.remove('open');
    sideNav?.classList.remove('hidden');
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
    this.filteredBooks = this.books.filter((obj) => obj.author.toLowerCase().includes(val) || obj.title.toLowerCase().includes(val));
    return this.filteredBooks;
    //this.filteredBooks$ = this.books$.pipe(map(books => books.filter((obj) => obj.author.toLowerCase().includes(val) || obj.title.toLowerCase().includes(val))));
  }

  editBook(selectedBook: Book) {
    let sideNav = document.querySelector('.mat-sidenav');
    sideNav?.classList.add('hidden');
    let editb = document.querySelector('.modal');
    editb?.classList.add('open');
    this.bookEdit = true;
    this.selectedBook = selectedBook;
  }

  cancel() {
    // this.scrollPage.nativeElement.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });
    let sideNav = document.querySelector('.mat-sidenav');
    this.bookEdit = false;
    let editb = document.querySelector('.modal');
    editb?.classList.remove('open');
    sideNav?.classList.remove('hidden');
  }

  deleteBook(event: Event, id: number) {
    event.preventDefault();
    this.service.deleteBook(id).subscribe(() => this.getBooks());
  }

  shortenTitle(title: string | string, maxLenght: number = 32) {
    if (title.length > maxLenght) {
      return title.substring(0, maxLenght - 3) + '...';
    } else {
     return title;
    }
  }
}
