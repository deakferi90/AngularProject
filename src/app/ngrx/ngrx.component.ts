import { Component, OnInit } from '@angular/core';
import { addItem, removeItem } from './todo.actions';
import { Observable, elementAt } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../shared/services/todo.service';
import { TodoItem } from '../shared/interfaces/todo.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private store: Store<{ todo: TodoItem[] }>,
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.checkoutForm = this.formBuilder.group({
      value: '',
    });

    this.todoList$ = store.pipe(select('todo'));
  }

  ngOnInit(): void {
    // Fetch the data from the remote JSON file or server
    this.getListItems();
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
    let id: number = 0;
    const newId = id++;

    const postData = {
      id: newId,
      value: this.newItem
    };

    this.formValues.push({ id: newId, value: this.newItem });
    this.store.dispatch(addItem({ id: newId, value: this.newItem }));

    // Update the remote JSON file with the new data
    this.http.post(this.todoService.getUrl(), postData).subscribe(
      (res) => {
        // this.store.dispatch(addItem({ id: newId, value: this.newItem }));
        console.log('Successfully posted to remote JSON file:', res);
        window.location.reload();
      },
      (error) => {
        console.error('Error posting to remote JSON file:', error);
      }
    );

    this.newItem = ''; // Clear the input field
  }

  removeItem(item: TodoItem) {
    
    this.formValues = this.formValues.filter(arrOfItems => item.id !== arrOfItems.id);
    console.log(`${this.todoService.getUrl()}/${item}`);
    this.store.dispatch(removeItem({ id: item}));
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