import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';
import {dataModel} from '../dataModel';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  //  name2:string="";
  //  name3:string="";
   id:number;

   reactiveForm:FormGroup;
   submitted=false;
  //  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
    constructor(private fb:FormBuilder, route:ActivatedRoute,private data:DataService) { }
  ngOnInit() {
    //  this.data.teacherMessage$.subscribe(message=>
    // {
    //    this.name2=message;
    // });
    this.id=0;
    this.reactiveForm=this.fb.group({
       Name:['', Validators.required],
       Email:['', [Validators.required, Validators.email]],
       Phone:['', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
       Address:['', Validators.required]   
    });
    
  }
   get registerFormControl() {
    return this.reactiveForm.controls;
  }
  
  onSubmit() {
    this.submitted=true;
    this.id+=1;
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
      const newUser= new dataModel(this.id,this.reactiveForm.value['Name'],this.reactiveForm.value['Email'],this.reactiveForm.value['Phone'],this.reactiveForm.value['Address']);
      this.data.addUser(newUser);

    }
  }
    
  // sendMessage() {
  //   this.data.sendMessage(this.name3)
  // }
}