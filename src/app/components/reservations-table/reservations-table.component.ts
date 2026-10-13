import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations-table',
  imports: [CommonModule],
  templateUrl: './reservations-table.component.html',
  styleUrl: './reservations-table.component.css'
})
export class ReservationsTableComponent {
  reservationTabs:any=[];
  constructor(private reservationService:ReservationService,private router:Router){}
  ngOnInit():void{
    this.getAllReservations();
  }

  getAllReservations(){
    this.reservationService.getAllReservation().subscribe((data)=>{
      this.reservationTabs=data;
      console.log("Here reservation",data);
    })
  }
  displayReservation(id:any){
    this.router.navigate(['reservationInfo/'+id]);
  }
  editReservation(id:any){
    this.router.navigate(['editReservation/'+id]);
  }
  deleteReservation(id:any){
    this.reservationService.deleteReservation(id).subscribe((data)=>{
      console.log("Here response after delete from BE",data);
      this.getAllReservations();
    })
  }

}
