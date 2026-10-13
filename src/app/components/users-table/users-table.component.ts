import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent  implements OnInit{
  usersTabs:any=[];
  constructor(private userService:UserService,private router:Router){}
  ngOnInit():void{
    this.getAllUsers();
      }
  getAllUsers(){
    this.userService.getAllUsers().subscribe((data)=>{
      console.log("Here users:",data);
      this.usersTabs=data;
      this.usersTabs = this.usersTabs.filter((u:any) => !u.roles.some((r:any) => r.name.toLowerCase() === 'admin'));
    })
  }
  displayUser(email:string){
this.router.navigate(['userInfo/'+email]);
  }
  editUser(id:any){
    this.router.navigate(['editUser/'+id]);
  }
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((data)=>{
      console.log("Here response from BE",data);
      this.getAllUsers();
    });
  }

}
