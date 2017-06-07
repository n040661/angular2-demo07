import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.css']
})
export class Form01Component implements OnInit {
  private myForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.myForm = new FormGroup({
    //   username:new FormControl(""),
    //   password:new FormGroup({
    //     first:new FormControl(""),
    //     last:new FormControl("")
    //   }),
    //   email:new FormControl("")
    // })
    this.myForm = this.fb.group({
      username:[""],
      password:this.fb.group({
        first:[""],
        last:[""]
      }),
      email:[""]
    })
  }
  post(val:any){
    console.log(val);
  }
}
