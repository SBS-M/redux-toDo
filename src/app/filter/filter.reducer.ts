
import * as fromFilter from './filter.action';
import { State, Action } from '@ngrx/store';
import { acciones } from './filter.action';


const estadoInicial: fromFilter.filtrosValidos = 'todos';

export function filterReducer(state = estadoInicial, action: fromFilter.acciones): fromFilter.filtrosValidos{

    switch(action.type){
        case fromFilter.SET_FILTER:
            return action.filter;  
        default: 
            return state;
    }
}