import {  Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
    // Implement logic to save changes to the selected book
    console.log('Changes saved for book:', this.selectedBook);
    this.selectedBook = null; // Clear selectedBook after saving changes
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

  editBook(el: any) {
    console.log('edited the book:', el);
    this.bookEdit = true;
    this.selectedBookIndex = el;
  
    // Wait for a short delay to ensure the form is fully rendered so the scrolling works
    setTimeout(() => {
      let form = document.querySelector('.form-item');
      form?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }, 0); // Adjust the delay as needed
  }

  cancel() {
    this.scrollPage.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    this.bookEdit = false;
  }

  deleteBook(event: Event, id: number) {
    event.preventDefault();
    this.service.deleteBook(id).subscribe(() => this.getBooks());
  }

  shortenTitle(title: string | string, maxLenght: number = 32) {
    // console.log(title.length);
    // if (title.length > maxLenght) {
    //   return title.substring(0, maxLenght - 3) + '...';
    // } else {
     return title;
    //}
  }
}
