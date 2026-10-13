import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { PlatsComponent } from './components/plats/plats.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { ReservationInfoComponent } from './components/reservation-info/reservation-info.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { MyBasketComponent } from './components/my-basket/my-basket.component';
import { authGuard } from './services/auth.guard';


export const routes: Routes = [
    {path:"",component:HomeComponent},//http://localhost:4200
    {path:"addPlat",component:AddPlatComponent,canActivate:[authGuard]},//http://localhost:4200/addPlat
    {path:"reservation",component:ReservationComponent,canActivate:[authGuard]},//http://localhost:4200/reservation
    {path:"signup",component:SignupComponent},//http://localhost:4200/signup
    {path:"signupAdmin",component:SignupComponent},//http://localhost:4200/signupAdmin
    {path:"signupChief",component:SignupComponent},//http://localhost:4200/signupChief
    {path:"login",component:LoginComponent},//http://localhost:4200/login
    {path:"contact",component:ContactComponent},//http://localhost:4200/contact
    {path:"plats",component:PlatsComponent,canActivate:[authGuard]},//http://localhost:4200/plats
    {path:"admin",component:AdminComponent,canActivate:[authGuard]},//http://localhost:4200/admin
    {path:"userInfo/:email",component:UserInfoComponent},//http://localhost:4200/userInfo/:email
    {path:"platInfo/:id",component:PlatInfoComponent},//http://localhost:4200/platInfo/:id
    {path:"reservationInfo/:id",component:ReservationInfoComponent},//http://localhost:4200/reservationInfo/:id
    {path:"editUser/:id",component:EditUserComponent,canActivate:[authGuard]},//http://localhost:4200/editUser/:id
    {path:"editPlat/:id",component:EditPlatComponent,canActivate:[authGuard]},//http://localhost:4200/editPlat/:id
    {path:"editReservation/:id",component:EditReservationComponent,canActivate:[authGuard]},//http://localhost/editResrvation/:id
    {path:"myBasket",component:MyBasketComponent,canActivate:[authGuard]},//http://localhost:4200/myBasket
    {path:"shop",component:ShopComponent}
];
