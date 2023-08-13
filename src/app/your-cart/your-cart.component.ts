import { Component } from '@angular/core';

@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.css']
})
export class YourCartComponent {
  list:any[]=[];
  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item});
    console.log(this.list)
  }
  removeTask(id:number)
  {
   console.log(id)
   this.list=this.list.filter(item=>item.id!==id)
  }
}



