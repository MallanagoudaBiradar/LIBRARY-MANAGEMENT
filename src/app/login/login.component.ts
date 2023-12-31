import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }
  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

   
  login(){
    this.http.get<any>("http://localhost:3000/posts").subscribe(res=>{
      //matching email and password
    const user = res.find((a:any)=>{
      return a.Email === this.loginform.value.email && a.password === this.loginform.value.password
    })
    //condition check for login
    if(user){
      alert("sucessfully logged in")
      this.loginform.reset();
     
    }else{
      alert("user not found with these credentials")
    }
    }
    ,err=>{
     alert("something went wrong");

    }
      )
    
      }
}
