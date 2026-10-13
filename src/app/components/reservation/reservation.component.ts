import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation',
  imports: [CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  reservationTabs:any=[];
  constructor(private reservationService:ReservationService){}
  ngOnInit():void{
    this.getReservation();
  }
  getReservation(){
    this.reservationService.getReservation().subscribe((data)=>{
      console.log("Here reservation",data);
      this.reservationTabs=data;
    })
  }

}
