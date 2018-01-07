import { Component } from '@angular/core';
// import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  viewMode = 'map';
  courses = [
    {
      name: 'c1'
    },
    {
      name: 'c2'
    }
  ];

  onAdd() {
    this.courses.push({name:'c' + this.courses.length});
  }

  onRemove(idx) {

    console.log(idx)
    this.courses.splice(idx, 1);
  }
}
