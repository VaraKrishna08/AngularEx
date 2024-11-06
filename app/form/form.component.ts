import { Component } from '@angular/core';
import { Faculty } from '../faculty';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myForm=new FormGroup({
    name:new FormControl(''),
    age:new FormControl('')
  });
  faculties:Faculty[]=[];
  idToEdit=-1;

  insert(){
    if(this.idToEdit<0){
      this.faculties.push(<Faculty>this.myForm.value);
    }
    else{
      this.faculties[this.idToEdit]=<Faculty>this.myForm.value;
    }
    this.myForm.controls.name.setValue('');
      this.myForm.controls.age.setValue('');
      this.idToEdit=-1;
    //console.log(this.myForm);
  }

  delete(i:number){
    this.faculties.splice(i);
   // console.log(i)
  }

  setValueForEdit(i:any){
   this.idToEdit=i;
    this.myForm.controls.name.setValue(this.faculties[i].name);
    this.myForm.controls.age.setValue(this.faculties[i].age);

  }
}
