
import { Todo } from './models/todo.model';
import { from } from 'rxjs';

export interface AppState{
    todos: Array<Todo>,
}