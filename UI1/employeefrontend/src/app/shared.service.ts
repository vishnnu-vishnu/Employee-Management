import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://127.0.0.1:8000/"

  constructor(private http:HttpClient) {}

get_employee_data():Observable<any>{
  return this.http.get<any[]>(this.APIUrl+'emp/')
}
add_new_employee(val:any){
  return this.http.post(this.APIUrl+'emp/',val)
}
update_employee(val:any){
  return this.http.put(this.APIUrl+'emp/',val)
}
delete_employee(val:any){
  return this.http.delete(this.APIUrl+'emp/'+val)
}



















}
