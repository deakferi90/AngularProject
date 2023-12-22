import { Component, OnInit } from '@angular/core';
import { addItem } from './todo.actions';
import { Observable } from 'rxjs';
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
  formValues: any = {};

  constructor(private store: Store<{ todo: TodoItem[] }>, private todoService: TodoService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.checkoutForm = this.formBuilder.group({
      value: ''
    })

    this.todoList$ = store.pipe(select('todo'));
  }

  ngOnInit(): void {
    this.formValues = this.checkoutForm.value;
    console.log(this.formValues);
  }

  // addItem() {
  //   // Generate a unique id for the new item
  //   const newId = new Date().getTime();

  //   // Dispatch the addItem action with id and item
  //   this.store.dispatch(addItem({ id: newId, value: this.newItem }));
  //   let posted = this.http.post(this.todoService.getUrl(), this.formValues );

  //   // Get the updated todo list from the store
  //   posted.subscribe(todoList => {
  //     // Make an HTTP request to post the updated todo list to the server
  //     this.todoService.postTodoItem(todoList).subscribe(
  //       response => {
  //         console.log('Successfully posted to remote JSON file:', response);
  //         //this.newItem = response;
  //       },
  //       error => {
  //         console.error('Error posting to remote JSON file:', error);
  //       }
  //     );
  //   });

  //   // Clear the input field
  //   this.newItem = '';
  // }

  addItem() {
    // Generate a unique id for the new item
    const newId = new Date().getTime();

    // Dispatch the addItem action with id and item
    this.store.dispatch(addItem({ id: newId, value: this.newItem }));
    //let posted = this.http.post(this.todoService.getUrl(), this.formValues );

    this.formValues = {
      id: newId,
      value: this.newItem
    }

    let posted = this.http.post(this.todoService.getUrl(), this.formValues);

    posted.subscribe(
      (res) => {
        console.log('Successfully posted to remote JSON file:', res);
      },
      error => {
        console.error('Error posting to remote JSON file:', error);
      }
    );

    // Get the updated todo list from the store
    // posted.subscribe(todoList => {
    //   // Make an HTTP request to post the updated todo list to the server
    //   this.todoService.postTodoItem(todoList).subscribe(
    //     response => {
    //       console.log('Successfully posted to remote JSON file:', response);
    //       //this.newItem = response;
    //     },
    //     error => {
    //       console.error('Error posting to remote JSON file:', error);
    //     }
    //   );
    // });

    // Clear the input field
    this.newItem = '';
  }

  removeItem(item: any) {
    console.log(item);
  }
}