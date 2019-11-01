import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set filtro';
export const CHANGE_STATE_FILTER = '[Filter] Change state by filter'

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFilterAction implements Action{
    readonly type = SET_FILTER;

    constructor( public filter: filtrosValidos){}
}

/* export class ChageStateByFilterAction implements Action{
    readonly type = CHANGE_STATE_FILTER;

    constructor( public ){}
} */


export type acciones = SetFilterAction;