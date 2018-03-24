import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  header = 'BasicAngular';
  @Input() input: string;
  // @Input() index: string;
  @Input() isEdit = false;


  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAdded = new EventEmitter<any>();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onUpdated = new EventEmitter<any>();

  constructor() {}
  ngOnInit() {}

  onAdd() {
    if (this.input && this.input.length > 0) {
      this.onAdded.emit(this.input);
      this.input = undefined;
      this.isEdit = false;
    }
  }

  onUpdate() {
    this.onUpdated.emit({ text: this.input });
    this.input = undefined;
    this.isEdit = true;
  }
}
