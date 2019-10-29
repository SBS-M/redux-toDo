import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.sass']
})
export class TodosItemsComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
    console.log("todo ", this.todo);
    
  }

}
