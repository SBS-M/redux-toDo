
import { Todo } from './models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './components/todo/todo.reducers';
import * as fromFilter from './filter/filter.reducer';
import * as fromFilterActions from './filter/filter.action';

export interface AppState{
    todos: Array<Todo>,
    filter: fromFilterActions.filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos:  fromTodo.todoReducer,
    filter: fromFilter.filterReducer
};
