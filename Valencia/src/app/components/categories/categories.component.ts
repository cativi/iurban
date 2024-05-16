import { Component, Input, inject } from '@angular/core';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card.component';
import { HomePoint } from '../../pages/home/models/home-data';
import { HomeService } from '../../pages/home/services/home.service';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';


@Component({
  selector: 'categories',
  standalone: true,
  imports: [CategoryCardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent extends CarouselComponent {
  // Additional code specific to CategoriesComponent

  @Input() categories: HomePoint[] | undefined;

  private homePointsService = inject(HomeService);


}


