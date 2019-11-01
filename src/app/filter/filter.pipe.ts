import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { filtrosValidosString } from '../../environments/constanst';
import * as fromFilterActions from './../filter/filter.action';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Array<Todo>, filter: fromFilterActions.filtrosValidos, value: any, args?: any): Array<Todo> {

    var todoList: Array<Todo>;

    switch (filter) {
      case filtrosValidosString.TODOS:
        return todos;
      case filtrosValidosString.COMPLETADO:
        return todos.filter(todo => todo.completado);
      case filtrosValidosString.PENDIENTES:
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
