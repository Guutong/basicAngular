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

  constructor() { }

  ngOnInit() { }

  onDelete(item, index) {
    this.listOfTable.splice(index, 1);
  }

  onEdit(item, index) {
    const data = { item, index };
    this.onEdited.emit(data);
  }
}
