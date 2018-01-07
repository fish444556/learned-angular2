import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  formShow = false;

  showForm(): void {
    this.formShow = !this.formShow;
  }

  public changeShow(childShow: boolean): void {
    this.formShow = childShow;
  }

}
