import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as fromTodo from './todo.actions';
import { SelectAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  public selectAll(){

    this.completado = !this.completado;
    const action = new fromTodo.SelectAllTodoAction(this.completado);
    this.store.dispatch(action);
  }

}
