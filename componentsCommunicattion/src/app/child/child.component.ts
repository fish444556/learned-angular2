import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('name') employeeName: string;
  @Input('city') employeeCity: string;
  @Input('salary') employeeSalary: number;
  @Output() sendRecord: EventEmitter<any> = new EventEmitter();

  public emitSendRecordEvent() {
    let selectedEmployeeObj: any = {
      selectedName: this.employeeName,
      selectedCity: this.employeeCity,
      selectedSalary: this.employeeSalary
    };
    this.sendRecord.emit(selectedEmployeeObj);
  }
}
