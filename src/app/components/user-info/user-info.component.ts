import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { TestimonialSectionComponent } from "../testimonial-section/testimonial-section.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  foundUser:any={};
  constructor(private activatedRoute:ActivatedRoute ,private userService:UserService){

  }
  ngOnInit():void{
   this.getUserByEmail();
  }
  getUserByEmail(){
 let userEmail=this.activatedRoute.snapshot.params['email'];
    this.userService.getUserByEmail(userEmail).subscribe((data)=>{
      console.log(data);
      this.foundUser=data;
    });
  }

}
