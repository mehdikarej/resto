import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from '../../services/plat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plat-info',
  imports: [CommonModule],
  templateUrl: './plat-info.component.html',
  styleUrl: './plat-info.component.css'
})
export class PlatInfoComponent {
  foundPlat:any={};
  constructor(private activatedRoute:ActivatedRoute,private platService:PlatService){}
  ngOnInit():void{
    this.getPlatById();
  };
  getPlatById(){
    let platId=this.activatedRoute.snapshot.params['id'];
    this.platService.getPlatById(platId).subscribe((data)=>{
      console.log("Here plat",data);
      this.foundPlat=data;
    })
  }

}
