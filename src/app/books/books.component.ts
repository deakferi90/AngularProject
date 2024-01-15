// 
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { Book } from '../shared/interfaces/books.interface';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(private service: BooksService, private modalService: NgbModal) { }

  // scrollToTop() {
  //   this.bookEdit = false;
  // }

  ngAfterViewInit(): void {
    this.getBooks();
  }

  saveChanges() {
    if (this.selectedBook) {
      this.service.updateBook(this.selectedBook).subscribe(() => {
        this.selectedBook = null;
        this.getBooks();
      });
    }
  
    let editc = document.querySelector('.edit-book-card');

    setTimeout(() => {
      editc?.classList.add('close');
    }, 0);
  
    setTimeout(() => {
      let editb = document.querySelector('.modal');
      editb?.classList.remove('open');
      // editc?.classList.remove('close');
    }, 450);
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
    // let editc = document.querySelector('.edit-book-card');

    editb?.classList.add('open');
    this.bookEdit = true;
    this.selectedBook = selectedBook;
  }

  cancel() {
    let sideNav = document.querySelector('.mat-sidenav');
    this.bookEdit = false;
    sideNav?.classList.remove('hidden');

    let editb = document.querySelector('.modal');
    let editc = document.querySelector('.edit-book-card');

    setTimeout(() => {
      editc?.classList.add('close');
    }, 0);

    setTimeout(() => {
      editb?.classList.remove('open');
      editc?.classList.remove('close');
    }, 150);
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

  open(content: any) {
    const options: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };

    this.modalService.open(content, options);
  }

  close() {
    this.modalService.dismissAll();
  }
}
