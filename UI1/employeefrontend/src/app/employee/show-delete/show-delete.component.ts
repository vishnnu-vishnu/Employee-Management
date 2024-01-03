import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrl: './show-delete.component.css'
})
export class ShowDeleteComponent {
  constructor(private service:SharedService){}

  employeedata:any=[]
  modaltitle:any;
  activateaddedit:boolean=false;
  emp:any;

ngOnInit():void{
  this.refreshemplist();
}

refreshemplist(){
  this.service.get_employee_data().subscribe(data=>{
    this.employeedata=data;
  })
}

  addclick(){
    this.emp={
      empid:0,
      name:"",
      place:"",
      mobile:""
    }
    this.modaltitle="Add New employee Details Here...!";
    this.activateaddedit=true;
  }

  closeclick(){
    this.activateaddedit=false;
    this.refreshemplist();
  }

  editclick(item:any){
    this.modaltitle="Edit Details Here...!"
    this.activateaddedit=true;
    this.emp=item;
  }

  deleteclick(item:any){
    if(confirm('Are you sure')){
      this.service.delete_employee(item.empid).subscribe(data=>{
        alert(data.toString());
        this.refreshemplist();
      })
    }
  }

}
