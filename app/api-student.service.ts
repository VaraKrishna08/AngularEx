import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiStudentService {
  apiUrl="https://65f5e21241d90c1c5e0a5156.mockapi.io/project_task/student";
  constructor(private http:HttpClient) { }
  getAllStudents(){
    return this.http.get(this.apiUrl);
  }
  getStudentById(id:any){
    return this.http.get(this.apiUrl+'/'+id);
  }
  deleteStudent(id:any){
    return this.http.delete(this.apiUrl+'/'+id);
  }
  insertStudent(form:any){
    return this.http.post(this.apiUrl,form);
  }
  updateStudent(id:any,form:any){
    return this.http.put(this.apiUrl+'/'+id,form);
  }
}