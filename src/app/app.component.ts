import { Component, OnInit } from '@angular/core';
import { CallServiceService } from './call-service.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: Employee[];
  input = new Employee();
  index;
  isEdit = false;

  constructor(private callServiceService: CallServiceService) {}

  ngOnInit(): void {
    this.callServiceService.getData().subscribe(data => {
      this.list = data;
    });
  }

  onShow(event) {
    this.callServiceService.getData().subscribe(data => (this.list = data));
  }

  onClickEdit(event) {
    const { id, name } = event;
    this.input = { id, name };
    this.isEdit = true;
  }

  onClickDelete(event) {
    this.callServiceService.deleteData(event).subscribe(res => {
      this.callServiceService.getData().subscribe(data => (this.list = data));
    });
  }

  onUpdated(event) {
    this.callServiceService.getData().subscribe(data => {
      this.list = data;
      this.input = new Employee();
      this.isEdit = false;
    });
  }
}
