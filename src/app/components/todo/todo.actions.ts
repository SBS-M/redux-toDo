
import { Store, Action } from '@ngrx/store';

export const AGREGAR_TODO = '[todo] Agregar todo';


export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;

    constructor( public texto: string ){}
}


export type Acciones = AgregarTodoAction ;