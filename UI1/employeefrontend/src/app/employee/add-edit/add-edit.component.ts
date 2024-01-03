import { Component,Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent {
  constructor(private service:SharedService){}

  



  @Input()emp:any;
  empid:any;
  name:any;
  place:any;
  mobile:any;

  ngOnInit():void{
    this.empid=this.emp.empid;
    this.name=this.emp.name;
    this.place=this.emp.place;
    this.mobile=this.emp.mobile;
    
  }

  save_employee(){
    var val ={
      empid:this.empid,
      name:this.name,
      place:this.place,
      mobile:this.mobile
    }
    this.service.add_new_employee(val).subscribe(res=>{
      alert(res.toString())
    })
  }

  update_employee(){
    var val ={
      empid:this.empid,
      name:this.name,
      place:this.place,
      mobile:this.mobile
    }
    this.service.update_employee(val).subscribe(res=>{
      alert(res.toString())
    })
  }


}
