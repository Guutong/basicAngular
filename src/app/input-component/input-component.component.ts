import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  constructor() {}

  header = 'BasicAngular';
  input1: string;
  showMe: string;
  listOfTable = [];
  isEdit = false;
  index;
  ngOnInit() {}

  onAdd() {
    this.listOfTable.push(this.input1);
    this.input1 = '';
    this.isEdit = false;
  }

  onUpdate() {
    this.listOfTable.splice(this.index, 1, this.input1);
    this.input1 = '';
  }

  onDelete(item, index) {
    this.listOfTable.splice(index, 1);
  }

  onEdit(item, index) {
    this.index = index;
    this.isEdit = true;
    this.input1 = item;
  }
}
