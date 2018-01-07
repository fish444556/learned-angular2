import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpCComponent } from './http-c/http-c.component';
import { DataPostService } from './data-post.service';

@NgModule({
  declarations: [
    AppComponent,
    HttpCComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
