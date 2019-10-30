import { Todo } from '../../models/todo.model';
import * as fromTodo from './todo.actions';


const todo1: Todo = new Todo('Vencer a Thanos');
const todo2: Todo = new Todo('Salvar el mundo');
const todo3: Todo = new Todo('Pedir el traje de IronMan');

todo2.completado = true;

const estadoInicial: Array<Todo> = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Array<Todo> {

    switch (action.type) {

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        case fromTodo.CHANGE_CHECK:
            return state.map(todoEdit => {
                if (todoEdit.id == action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit
                }
            });
        case fromTodo.EDIT_TODO:
            return state.map((stateEdit) => {
                if (stateEdit.id === action.id) {
                    return {
                        ...stateEdit,
                        texto: action.texto
                    };
                } else {
                    return stateEdit;
                }
            });
        case fromTodo.DELETE_TODO:
            return state.filter( stateDelete => stateDelete.id != action.id);
        case fromTodo.SELECT_ALL:
            return state.map( (newState) => {
                return {
                    ...newState,
                    completado: action.completado
                }
            })
        default:
            return state;
    }
}
