import { Renderer2, Component, ElementRef, OnInit, ViewChild, AfterViewInit, inject } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { Book } from '../shared/interfaces/books.interface';
import { Observable, map } from 'rxjs'; //-used if async pipe subscription is being implemented
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
  @ViewChild('editForm') editForm!: ElementRef;
  selectedBook: any;
  bookEdit: boolean = false;
  constructor(private service: BooksService) { }

  scrollToTop() {
    this.bookEdit = false;
  }

  ngAfterViewInit(): void {
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
    this.filteredBooks = this.books.filter((obj) => obj.author.toLowerCase().includes(val) || obj.title.toLowerCase().includes(val));
    return this.filteredBooks;
    //this.filteredBooks$ = this.books$.pipe(map(books => books.filter((obj) => obj.author.toLowerCase().includes(val) || obj.title.toLowerCase().includes(val))));
  }

  // editBook(id: number) {
  //   let body = document.querySelector('.form-item');
  //   body?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  //   console.log('edited the book:', id);
  //   this.bookEdit = true;
  // }

  editBook(id: number) {
    console.log('edited the book:', id);
    this.bookEdit = true;
  
    // Wait for a short delay to ensure the form is fully rendered so the scrolling works
    setTimeout(() => {
      let body = document.querySelector('.form-item');
      body?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }, 100); // Adjust the delay as needed
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
    if (title.length > maxLenght)
      return title.substring(0, maxLenght - 3) + '...';
    else {
      return title;
    }
  }
}
