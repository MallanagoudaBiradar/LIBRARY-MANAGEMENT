import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
showadd!:boolean
showupdate!:boolean
  constructor() {}

  ngOnInit(): void {
    
  }
add(){
this.showadd=true;
this.showupdate=false;
}
update(){
  this.showadd=false;
  this.showupdate=true;
}
}
