
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatService } from '../../services/plat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-plat',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-plat.component.html',
  styleUrl: './add-plat.component.css'
})
export class AddPlatComponent {
platObj:any={};
constructor(private platService:PlatService){

}
ngOnInit():void{
}
addPlat(){
     const platToSend = {
      name: this.platObj.name,
      description:this.platObj.description,
      price: this.platObj.price,
    };
  this.platService.addPlat(platToSend).subscribe((res)=>{
    console.log("Here plat",res);
  })
}
}
