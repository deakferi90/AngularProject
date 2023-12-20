import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000'; 

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  model: string = 'books';

  constructor(private http: HttpClient) { }

  public getBooks() {
    return this.http.get<object[]>(this.getAllBooks())
  }

  public getAllBooks() {
    return `${BASE_URL}/${this.model}`;
  }

}
