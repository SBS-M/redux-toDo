import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import * as fromTodo from './../todo.actions';
import { ChangeCheckAction } from '../todo.actions';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.sass']
})
export class TodosItemsComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  checkField: FormControl;
  inputTxt: FormControl;
  editando: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.inputTxt = new FormControl(this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe((change) => {
      console.log("this.todo.id ", this.todo.id);

      const action = new fromTodo.ChangeCheckAction(this.todo.id);
      this.store.dispatch(action);
    });
    console.log("todo ", this.todo);
  }

  public isEdit() {
    this.editando = !this.editando;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  public terminarEdicion() {
    this.editando = false;

    if(this.inputTxt.invalid){
      return;
    }

    if(this.inputTxt.value == this.todo.texto){
      return;
    }

    const action = new fromTodo.EditTodoAction(this.todo.id, this.inputTxt.value);
    this.store.dispatch(action);
  }

  public deleteToDo(){
    const action = new fromTodo.DeleteTodoAction(this.todo.id)
    this.store.dispatch( action );
  }

}
