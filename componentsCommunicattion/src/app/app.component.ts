import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  viewMode = 'map';

  public employeeRecord: any = [
    {eName: 'Tom', eCity:'NY', eSalary: 500},
    {eName: 'Jerry', eCity:'NJ', eSalary: 1500},
    {eName: 'Jim', eCity:'MI', eSalary: 300},
    {eName: 'Lee', eCity:'WI', eSalary: 100}
  ]

  public selectdEmployeeData: any = {
    selectedName: '',
    selectedCity: '',
    selectedSalary: ''
  }

  public getRecord(data: any): void {
    this.selectdEmployeeData = data;
  }
}
