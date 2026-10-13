import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userURL:string="http://localhost:9000/api/users";
  constructor(private httpClient:HttpClient) { }
  signup(data:any){
    return this.httpClient.post<any>(this.userURL+"/signup",data);
  }
  login(data:any){
    return this.httpClient.post<any>(this.userURL+"/login",data);
  }
  deleteUser(id:any){
    return this.httpClient.delete<any>(`${this.userURL}/${id}`);
  }
  getUserByEmail(email:string){
    return this.httpClient.get<any>(this.userURL+"/by-email",{params:{email}});
  }
  getUserById(id:any){
    return this.httpClient.get<any>(`${this.userURL}/${id}`);
  }
  editUser(id:any,data:any){
return this.httpClient.put<any>(`${this.userURL}/${id}`,data);
  }
  getAllUsers(){
    return this.httpClient.get<any>(this.userURL);
  }
}
