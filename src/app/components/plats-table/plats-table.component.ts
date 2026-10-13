import { Component } from '@angular/core';
import { PlatService } from '../../services/plat.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plats-table',
  imports: [CommonModule],
  templateUrl: './plats-table.component.html',
  styleUrl: './plats-table.component.css'
})
export class PlatsTableComponent {
  platsTabs:any=[];
  constructor(private platService:PlatService,private router:Router){}
  ngOnInit():void{
    this.getAllPlats();
  }
  getAllPlats(){
    this.platService.getAllPlats().subscribe((res)=>{
      console.log("Here plats",res);
      this.platsTabs=res;
    })
  }
  displayPlat(id:any){
    this.router.navigate(['platInfo/'+id]);
  }
  editPlat(id:any){
    this.router.navigate(['editPlat/'+id]);
  }
  deletePlat(id:any){
    this.platService.deletePlat(id).subscribe((data)=>{
      console.log("Here response from BE",data);
      this.getAllPlats();
    })
  }


}
