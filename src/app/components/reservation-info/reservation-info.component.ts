import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-info',
  imports: [CommonModule],
  templateUrl: './reservation-info.component.html',
  styleUrl: './reservation-info.component.css'
})
export class ReservationInfoComponent {
  foundReservation:any={}
  constructor(private activatedRoute:ActivatedRoute,private reservationService:ReservationService){ }
  ngOnInit():void{
    this.getReservationById();
  }

  getReservationById(){
    let reservationId=this.activatedRoute.snapshot.params['id'];
    this.reservationService.getReservationById(reservationId).subscribe((data)=>{
      console.log("Here reservation",data);
      this.foundReservation=data;
    })
  }

}
