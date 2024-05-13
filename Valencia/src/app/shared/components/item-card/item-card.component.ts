import { Component, Input, inject } from '@angular/core';
import { HomeData, RecommendedRoutesList } from '../../../pages/home/models/home-data';
import { HomeService } from '../../../pages/home/services/home.service';

@Component({
  selector: 'item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {

  itemCard: HomeData | undefined;

  recommendationList: RecommendedRoutesList[] = [];

  private homeService = inject(HomeService);

  ngOnInit() {
    this.homeService.loadHomeData().subscribe((response: HomeData) => {
      this.itemCard = response;
      this.recommendationList = this.itemCard.recommendedRoutesList;
      console.log(this.recommendationList);
    })
  }
}

// "recommendedRoutesList": [
//   {
//       "id": 523,
//       "name": {
//           "es": "Valencia en 2 d\u00edas",
//       },
//       "image": "https:.png",
//       "route_days": 2
//   },
