import { Component, OnInit } from '@angular/core';
import { CallServiceService } from './call-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list = [1, 2, 3];
  input;
  index;
  isEdit = false;

  constructor(private callServiceService: CallServiceService) { }

  ngOnInit(): void {
    this.callServiceService.getData().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  onShow(event) {
    this.list.push(event);
  }

  onClickEdited(event) {
    this.input = event.item;
    this.index = event.index;
    this.isEdit = true;
  }

  onUpdated(event) {
    this.list.splice(this.index, 1, event.text);
    this.input = '';
    this.isEdit = false;
  }
}
