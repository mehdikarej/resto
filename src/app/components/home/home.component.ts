import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { ListSectionComponent } from "../list-section/list-section.component";
import { ProductComponent } from "../product/product.component";
import { CartBannerComponent } from "../cart-banner/cart-banner.component";
import { TestimonialSectionComponent } from "../testimonial-section/testimonial-section.component";
import { AdvertissementSectionComponent } from "../advertissement-section/advertissement-section.component";
import { ShopBannerComponent } from "../shop-banner/shop-banner.component";
import { LatestNewsComponent } from "../latest-news/latest-news.component";
import { LogoCarouselComponent } from "../logo-carousel/logo-carousel.component";
import { SearchAreaComponent } from "../search-area/search-area.component";


@Component({
  selector: 'app-home',
  imports: [HeroComponent, ListSectionComponent, ProductComponent, CartBannerComponent, TestimonialSectionComponent, AdvertissementSectionComponent, ShopBannerComponent, LatestNewsComponent, LogoCarouselComponent, SearchAreaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
