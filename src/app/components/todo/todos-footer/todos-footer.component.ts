import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as fromFilterAction from './../../../filter/filter.action';
import { filtrosValidos, SetFilterAction } from '../../../filter/filter.action';
import * as fromTodoActions from './../todo.actions';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.sass']
})
export class TodosFooterComponent implements OnInit {

  filtrosValidos: Array<filtrosValidos> = ['completados','pendientes','todos'];
  actionSelect: filtrosValidos;

  tareasPendientes: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe((action)=>{
      this.actionSelect = action.filter;
      this.countTareasPendientes(action.todos);
    });
  }

  public changeFilter(type:filtrosValidos){
    const action = new fromFilterAction.SetFilterAction(type);
    this.store.dispatch(action);
  }

  public countTareasPendientes(todos: Array<Todo>){
    this.tareasPendientes = todos.filter(todo => !todo.completado).length;
  }

  public cleanComplete(){
    const action = new fromTodoActions.ClearCompleteAction();
    this.store.dispatch(action);
  }

}
