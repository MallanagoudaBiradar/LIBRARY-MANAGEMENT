import { Component, OnInit } from '@angular/core';
//import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      user: ['', Validators.required],
      code: ['', Validators.required],
     // user:new FormControl('',[Validators.required]),
      //Code:new FormControl('',[Validators.required]),
    })
  
  }

    loginUser()
    {
      console.log(this.loginForm.value)
    }
    get user()
    {
      return this.loginForm.get('user')
    }
}
