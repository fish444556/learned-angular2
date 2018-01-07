import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }
  name = '';
  surname = '';
  message = '';

  ngOnInit() {

  }
  @Input() show: false;
  @Output() childShow: EventEmitter<boolean> = new EventEmitter();

  closeForm() {
    this.show = false;
    this.childShow.emit(false);
  }

  submitForm(): void {
    // event.stopPropagation();
    console.log(this.name);
    console.log(this.surname);
    console.log(this.message);
    this.closeForm();
  }
}
