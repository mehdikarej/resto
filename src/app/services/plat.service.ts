import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PlatService {
platURL:string="http://localhost:9000/api/plats";
  constructor(private httpClient:HttpClient) { }
  addPlat(data:any){
   return  this.httpClient.post<any>(this.platURL,data);
  }
  getPlatById(id:any){
return this.httpClient.get<any>(`${this.platURL}/${id}`);
  }
  editPlat(id:any,data:any){
    return this.httpClient.put<any>(`${this.platURL}/${id}`,data);
  }
  deletePlat(id:any){
    return this.httpClient.delete<any>(`${this.platURL}/${id}`);
  }
  getAllPlats(){
    return this.httpClient.get<any>(this.platURL);
  }
}
