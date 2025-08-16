import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [AppComponent, EducationComponent, BlogComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }