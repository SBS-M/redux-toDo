import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as fromFilterAction from './../../../filter/filter.action';
import { filtrosValidos } from '../../../filter/filter.action';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.sass']
})
export class TodosFooterComponent implements OnInit {

  filtrosValidos: Array<filtrosValidos> = ['completados','pendientes','todos'];

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  public changeFilter(){

  }

}
