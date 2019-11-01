import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.sass']
})
export class TodosListComponent implements OnInit {

  todos: Array<Todo> = [];
  filtro: string;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((stateList) => {
      this.todos = stateList.todos;
      this.filtro = stateList.filter;
    });
  }

}
