import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.sass']
})
export class TodosAddComponent implements OnInit {

  formTxt: FormControl;

  constructor( private store: Store<AppState>) { 
    
  }

  ngOnInit() {
    this.formTxt  = new FormControl('', Validators.required);
  }

  agregarTodo(){
    
    if(this.formTxt.invalid){
      return;
    }else{
      const action = new fromTodo.AgregarTodoAction(this.formTxt.value);
      this.store.dispatch(action);
      this.formTxt.setValue('');
    }
  }

}
