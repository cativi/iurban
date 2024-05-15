import { Component, HostListener, Input, inject } from '@angular/core';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card.component';
import { Item } from '../../pages/home/models/home-data';
import { HomeService } from '../../pages/home/services/home.service';


@Component({
  selector: 'categories',
  standalone: true,
  imports: [CategoryCardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  @Input() categories: Item[] | undefined;

  // Access the array of all CATEGORIES within HOMEPOINTS (with their id, name), and the ITEMS within EACH category

  // -------------------------------DATA SAMPLE-------------------------------

  // "homePoints": [
  //   {
  //       "id": 0,
  //       "type": "categories",
  //       "category": {
  //           "id": 39,
  //           "nameSlug": {
  //               "es": "top-10-visitados",
  //               "en": "top-10-visited",
  //               "va": "top-10-visitados"
  //           },
  //           "name": {
  //               "es": "Top 10 + visitados",
  //               "en": "Top 10 + visited",
  //               "va": "Top 10 + visitados"
  //           }
  //       },
  //       "items": [
  //           {
  //               "id": 499,
  //               "type": "point",
  //               "name": {
  //                   "es": "El Oceanogr\u00e0fic",
  //                   "en": "Oceanographic ",
  //                   "va": "El Oceanogr\u00e1fic"
  //               },
  //               "image": "https:\/\/experimental.ciceroneweb.com\/storage\/clients\/8\/interest_points\/499\/image\/1681827074172_18.jpg",
  //               "url": null,
  //               "duration": 120,
  //               "durationc": "2h.",
  //               "num_clicks": 412,
  //               "coordinates": "39.4534183,-0.3484183",
  //               "nameSlug": {
  //                   "es": "el-oceanografic",
  //                   "en": "oceanographic",
  //                   "va": "el-oceanografic"
  //               },
  //               "subcategories": [

  //               ],
  //               "accesibilities": [

  //               ],
  //               "price": "\u20ac\u20ac",
  //               "priceFilter": "2",
  //               "popularity": 412,
  //               "start": null,
  //               "end": null,
  //               "categories": [
  //                   "35",
  //                   "39",
  //                   "148"
  //               ]
  //           },

  // -------------------------------INTERFACES-------------------------------

  //   export interface HomePoint {
  //     id: number | string;
  //     type: string;
  //     category?: Category;
  //     items?: Item[];
  //     events?: Event[];
  // }

  //   export interface Category {
  //     id: number;
  //     nameSlug: Claim;
  //     name: Claim;
  // }

  //   export interface Item {
  //     id: number;
  //     type: Type;
  //     name: Claim;
  //     image: null | string;
  //     url: Claim | null;
  //     duration: number | null;
  //     durationc: Durationc | null;
  //     num_clicks: number;
  //     coordinates: null | string;
  //     nameSlug: Claim;
  //     subcategories: string[];
  //     accesibilities: any[];
  //     price: Price | null;
  //     priceFilter: null | string;
  //     popularity: number;
  //     start: Date | null;
  //     end: Date | null;
  //     categories: string[];
  // }




  private homePointsService = inject(HomeService);

  currentIndex: number = 0;
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  // Update isMobile variable based on screen size
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 1224;
  }

  nextItems() {
    if (this.categories &&
      this.currentIndex + 4 < this.categories.length) {
      this.currentIndex += 4;
    }
  }

  previousItems() {
    if (this.currentIndex - 4 >= 0) {
      this.currentIndex -= 4;
    }
  }
}


