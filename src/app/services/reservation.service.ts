import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
reservationURL:string="http://localhost:9000/api/reservations";
  constructor(private httpClient:HttpClient) { }
  addReservation(obj:any){
    return this.httpClient.post<any>(this.reservationURL,obj);
  }
  editReservation(id:any,obj:any){
    return this.httpClient.put<any>(`${this.reservationURL}/${id}`,obj);
  }
  getReservationById(id:any){
    return this.httpClient.get<any>(`${this.reservationURL}/${id}`);
  }
  deleteReservation(id:any){
    return this.httpClient.delete<any>(`${this.reservationURL}/${id}`);
  }
  getAllReservation(){
    return this.httpClient.get<any>(this.reservationURL);
  }
  getReservation(){
    return this.httpClient.get<any>(this.reservationURL+"/reservation");
  }
  getMyReservation(){
    return this.httpClient.get<any>(this.reservationURL+"/myReservation");
  }
}
