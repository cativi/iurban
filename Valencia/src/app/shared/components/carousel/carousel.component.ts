import { Component, HostListener, Input } from '@angular/core';
import { HomePoint, Item, RecommendedRoutesList } from '../../../core/models/home-data';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  @Input() items: Item[] | undefined;
  @Input() categories: HomePoint[] | undefined;
  @Input() recommendationList: RecommendedRoutesList[] | undefined;

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
    if (this.items && this.currentIndex + 4 < this.items.length) {
      this.currentIndex += 4;
    }
  }

  previousItems() {
    if (this.currentIndex - 4 >= 0) {
      this.currentIndex -= 4;
    }
  }
}



