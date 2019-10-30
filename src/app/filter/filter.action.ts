import { Action } from '@ngrx/store';
import { type } from 'os';


export const SET_FILTER = '[Filter] Set filtro';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFilterAction implements Action{
    readonly type = SET_FILTER;

    constructor( public filter: filtrosValidos){}
}


export type acciones = SetFilterAction;