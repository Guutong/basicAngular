import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CallServiceService } from '../call-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  header = 'BasicAngular';
  @Input() input: Employee = new Employee();
  @Input() isEdit = false;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAdded = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onUpdated = new EventEmitter<any>();

  constructor(private callServiceService: CallServiceService) {}
  ngOnInit() {}

  onAdd() {
    if (this.input.name && this.input.name.length > 0) {
      this.callServiceService.addData(this.input).subscribe(res => {
        this.onAdded.emit(res);
        this.input = new Employee();
        this.isEdit = false;
      });
    }
  }

  onUpdate() {
    this.callServiceService.updateData(this.input).subscribe(res => {
      this.onUpdated.emit(res);
      this.input = new Employee();
      this.isEdit = true;
    });
  }
}
