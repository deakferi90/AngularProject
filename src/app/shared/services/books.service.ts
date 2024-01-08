import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/books.interface';
import { ModalComponent } from 'src/app/books/modal/modal.component';
import { ModalService } from './modal.service';
import { MatDialog } from '@angular/material/dialog';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  model: string = 'books';

  constructor(private http: HttpClient, private service: ModalService, private modalService: NgbModal) { }

  public getBooks() {
    return this.http.get<object[]>(this.getAllBooks())
  }

  public getAllBooks() {
    return `${BASE_URL}/${this.model}`;
  }

  public deleteBook(id: number) {
    return this.http.delete(`${this.getAllBooks()}/${id}`)
  }

  updateBook(updatedBook: Book): Observable<any> {
    const url = `${this.getAllBooks()}/${updatedBook.id}`;
    return this.http.put(url, updatedBook);
  }

  openModal() {
    this.modalService.open(ModalComponent, {
      windowClass: 'custom-modal',
    });
  }
}
