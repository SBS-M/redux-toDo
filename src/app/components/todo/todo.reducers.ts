import { Todo } from '../../models/todo.model';
import * as fromTodo from './todo.actions';


const todo1: Todo = new Todo('Vencer a Thanos');
const todo2: Todo = new Todo('Salvar el mundo');
const todo3: Todo = new Todo('Pedir el traje de IronMan');

const estadoInicial: Array<Todo> = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Array<Todo> {

    switch(action.type){

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        default: 
            return state;
    }
}
