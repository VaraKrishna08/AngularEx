import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ArraycrudComponent } from './arraycrud/arraycrud.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './student/student.component';
import { DetailStudentComponent } from './detailstudent/detailstudent.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"arraycrud",
    component:ArraycrudComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"form",
    component:FormComponent
  },
  {
    path:"students",
    component:StudentsComponent
  },


  {
    path:"students/add",
    component:AddStudentComponent
  },
  {
    path:"students/edit/:id",
    component:AddStudentComponent
  },
  {
    path:"students/:id",
    component:DetailStudentComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
