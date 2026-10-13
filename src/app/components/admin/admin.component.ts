import { Component } from '@angular/core';
import { UsersTableComponent } from "../users-table/users-table.component";
import { PlatsTableComponent } from "../plats-table/plats-table.component";
import { ReservationsTableComponent } from "../reservations-table/reservations-table.component";

@Component({
  selector: 'app-admin',
  imports: [UsersTableComponent, PlatsTableComponent, ReservationsTableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
