import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { ItemCardComponent } from '../../shared/components/item-card/item-card.component';
import { HomeData, RecommendedRoutesList } from '../../pages/home/models/home-data';
import { HomeService } from '../../pages/home/services/home.service';


@Component({
  selector: 'rutas',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {

  recommendationList: RecommendedRoutesList[] = [];

  private recommendedRoutesService = inject(HomeService);

  currentIndex: number = 0;
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
    this.recommendedRoutesService.loadHomeData().subscribe((response: HomeData) => {
      this.recommendationList = response.recommendedRoutesList;
      console.log(this.recommendationList);
    });
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
    if (this.currentIndex + 4 < this.recommendationList.length) {
      this.currentIndex += 4;
    }
  }

  previousItems() {
    if (this.currentIndex - 4 >= 0) {
      this.currentIndex -= 4;
    }
  }
}

