import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ArraycrudComponent } from './arraycrud/arraycrud.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentsComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailStudentComponent } from './detailstudent/detailstudent.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    ArraycrudComponent,
    HomeComponent,
    AboutComponent,
    StudentsComponent,
    DetailStudentComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
