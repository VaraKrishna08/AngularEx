import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})export class StudentsComponent {
  data: Student[] = [];
  constructor(private api:ApiStudentService){

  }
  ngOnInit(){
    this.api.getAllStudents().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data);
    });
  }
  delete(id:any){
    this.api.deleteStudent(id).subscribe((res)=>{
      this.ngOnInit();
    })
  }
}
