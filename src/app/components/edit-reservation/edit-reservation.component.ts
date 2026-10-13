import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-reservation',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-reservation.component.html',
  styleUrl: './edit-reservation.component.css'
})
export class EditReservationComponent {
  reservation: any = {};
  reservationId!: number;
  constructor(private activatedRoute: ActivatedRoute, private reservationService: ReservationService, private router: Router) { }
  ngOnInit(): void {
    this.reservationId = this.activatedRoute.snapshot.params['id'];
    this.getReservationById();
  }

  editReservation() {
    this.reservationService.editReservation(this.reservationId, this.reservation).subscribe({
      next: (data) => {
        console.log('Reservation mis à jour :', data);
        this.router.navigate(['/admin']);
        // Rediriger après modification si besoin
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour', err);
      }
    })
  }
  getReservationById() {
    this.reservationService.getReservationById(this.reservationId).subscribe((data) => {
      this.reservation = data;
    })
  }
}
