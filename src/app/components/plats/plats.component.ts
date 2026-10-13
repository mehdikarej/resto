import { Component } from '@angular/core';
import { PlatService } from '../../services/plat.service';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../../services/reservation.service';
import { FormsModule } from '@angular/forms';
import { MyFilterPipe } from '../../pipes/my-filter.pipe';

@Component({
  selector: 'app-plats',
  imports: [CommonModule,FormsModule,MyFilterPipe],
  templateUrl: './plats.component.html',
  styleUrl: './plats.component.css'
})
export class PlatsComponent {
    platsTabs:any=[];
     item:any='';
    constructor(private platService:PlatService,private reservationService:ReservationService){}
    ngOnInit():void{
      this.getAllPlats();
    }
    getAllPlats() {
    this.platService.getAllPlats().subscribe(res => {
      this.platsTabs = res.map((p: any) => ({
        ...p,
        showDetails: false,
        quantity: 1
      }));
    });
  }
    detaillsPlat(plat:any){
       plat.showDetails = !plat.showDetails;
  }
addToCart(plat:any){
  const reservationRequest={platId:plat.id,
    quantity:plat.quantity||1
  };
  this.reservationService.addReservation(reservationRequest).subscribe({
    next:(data)=>{
    console.log("Here reservation",data);
    },
    error:(err)=>{
      console.log("Reservation error",err);
    }
  })
}
}
