
import { Store, Action } from '@ngrx/store';

export const AGREGAR_TODO = '[todo] Agregar todo';
export const CHANGE_CHECK = '[todo] Cambiar todo';
export const EDIT_TODO = '[todo] Editar todo';
export const DELETE_TODO = '[todo] Eliminar todo';
export const SELECT_ALL = '[todo] Seleccionar todos los todo';
export const CLEAR_COMPLETE = '[Filter] Clear complete'

export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;

    constructor( public texto: string ){}
}

export class ChangeCheckAction implements Action{
    readonly type = CHANGE_CHECK;
    
    constructor( public id: number){}
}

export class EditTodoAction implements Action{
    readonly type = EDIT_TODO;

    constructor( public id: number, public texto: string){}
}

export class DeleteTodoAction implements Action{
    readonly type = DELETE_TODO;

    constructor( public id: number ){}
}

export class SelectAllTodoAction implements Action{
    readonly type = SELECT_ALL;
    
    constructor( public completado: boolean){}
}

export class ClearCompleteAction implements Action{
    readonly type = CLEAR_COMPLETE;
}

export type Acciones = AgregarTodoAction | ChangeCheckAction | EditTodoAction | DeleteTodoAction | SelectAllTodoAction
| ClearCompleteAction;