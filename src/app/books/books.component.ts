import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { Book } from '../shared/interfaces/books.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books!: Book[] | any[];
  filteredBooks!: Book[];
  @ViewChild('inputElement', { static: false })
  inputElement!: ElementRef;
  constructor(private service: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): any {
    this.service.getBooks().subscribe(data => {
      this.books = data;
      this.filteredBooks = this.books;
    })
  }

  filterBooks() {
    const val = this.inputElement.nativeElement.value.toLowerCase();
    this.filteredBooks = this.books.filter((obj) => obj.author.toLowerCase().includes(val));
    return this.filteredBooks;
  }
}
