import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  imports: [FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
user:any={};
userId!:number;
constructor(private activatedRoute:ActivatedRoute,private userService:UserService,private router:Router){}
ngOnInit():void{
   this. userId=this.activatedRoute.snapshot.params['id'];
this.getUserById();
}

editUser(){
  this.userService.editUser(this.userId,this.user).subscribe({
     next: (data) => {
        console.log('Utilisateur mis à jour :', data);
        this.router.navigate(['admin']);
        // Rediriger après modification si besoin
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour', err);
      }
    });
    
  
}
getUserById(){
  this.userService.getUserById(this.userId).subscribe((data)=>{
    this.user=data;
  })
}
}
