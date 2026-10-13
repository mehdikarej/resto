import { Component } from '@angular/core';
import { PlatService } from '../../services/plat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-plat',
  imports: [FormsModule],
  templateUrl: './edit-plat.component.html',
  styleUrl: './edit-plat.component.css'
})
export class EditPlatComponent {
  plat:any={};
  platId!:number;
  constructor(private activatedRoute:ActivatedRoute ,private platService:PlatService,private router:Router){}
  ngOnInit():void{
    this.platId=this.activatedRoute.snapshot.params['id'];
    this.getPlatById();
  }
editPlat(){
  this.platService.editPlat(this.platId,this.plat).subscribe({
    next:(data)=>{
        console.log('Plat mis à jour :', data);
        this.router.navigate(['/admin']);
        // Rediriger après modification si besoin
    },
    error:(err)=>{
        console.error('Erreur lors de la mise à jour', err);
    }
  })
}

  getPlatById(){
    this.platService.getPlatById(this.platId).subscribe((data)=>{
      this.plat=data;
    })
  }

}
