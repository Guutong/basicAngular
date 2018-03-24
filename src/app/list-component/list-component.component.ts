import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  @Input() listOfTable = [];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdited = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleted = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onDelete(item) {
    this.onDeleted.emit(item);
  }

  onEdit(item) {
    this.onEdited.emit(item);
  }
}
