import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-basket',
  imports: [CommonModule],
  templateUrl: './my-basket.component.html',
  styleUrl: './my-basket.component.css'
})
export class MyBasketComponent {
  myReservationTabs:any=[];
  constructor(private reservationService:ReservationService){}
  ngOnInit():void{
    this.getMyReservation();
  }

  getMyReservation(){
    this.reservationService.getMyReservation().subscribe((data)=>{
      console.log("Here reservation",data);
      this.myReservationTabs=data;
    })
  }
  deleteReservation(id:any){
    this.reservationService.deleteReservation(id).subscribe((res)=>{
      console.log("Here response from BE",res);
      this.getMyReservation();
    })
  }

}
