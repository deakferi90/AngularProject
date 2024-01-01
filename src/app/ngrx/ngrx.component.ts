import { Component, OnInit } from '@angular/core';
import { addItem, removeItem } from './todo.actions';
import { Observable, elementAt } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../shared/services/todo.service';
import { TodoItem } from '../shared/interfaces/todo.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css'],
})
export class NgrxComponent implements OnInit {
  todoList$: Observable<TodoItem[]>;
  newItem: string = '';
  checkoutForm: FormGroup;
  formValues: TodoItem[] = [];
  private id: number = 1;

  constructor(
    private store: Store<{ todo: TodoItem[] }>,
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.checkoutForm = this.formBuilder.group({
      value: '',
    });

    this.todoList$ = store.pipe(select('todo'));
  }

  ngOnInit(): void {
    // Fetch the data from the remote JSON file or server
    this.getListItems();
    this.id = this.todoService.getId();
  }

  getListItems() {
    this.http.get<any[]>(this.todoService.getUrl()).subscribe(
      (data) => {
        // Flatten the nested arrays and assign directly to formValues
        this.formValues = data.flat();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  addItem() {
    // Check if the current ID already exists in the store
    const idExists = this.formValues.some(item => item.id === this.id);

    if (this.id === 0) {
      this.id++
      return;
    }
  
    // If the current ID exists, find the next available ID
    if (idExists) {
      let newId = this.id;
      do {
        newId += 1;
      } while (this.formValues.some(item => item.id === newId));
    
      this.id = newId;
      this.todoService.setId(this.id);
    }
  
    const postData = {
      id: this.id,
      value: this.newItem
    };
  
    this.formValues.push({ id: this.id, value: this.newItem });
    this.http.post(this.todoService.getUrl(), postData).subscribe(
      (res) => {
        console.log('Successfully posted to remote JSON file:', res);
        this.store.dispatch(addItem({ id: this.id, value: this.newItem }));
      },
      (error) => {
        console.error('Error posting to remote JSON file:', error);
  
        // If there was an error posting, increment the ID and try again
        this.id += 1;
        this.todoService.setId(this.id);
        this.addItem(); // Recursively call addItem with the updated ID
      }
    );
  
    this.newItem = ''; // Clear the input field
  }

  removeItem(item: TodoItem) {
    this.formValues = this.formValues.filter(arrOfItems => item.id !== arrOfItems.id);
    this.store.dispatch(removeItem({ id: item.id}));
    this.http.delete(`${this.todoService.getUrl()}/${item.id}`).subscribe(
      (res) => {
        console.log('Successfully deleted to remote JSON file:', res);
      },
      (error) => {
        console.error('Error deleting to remote JSON file:', error);
      }
    );
  }
}