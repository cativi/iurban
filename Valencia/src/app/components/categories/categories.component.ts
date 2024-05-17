import { Component, inject } from '@angular/core';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card.component';
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

  private homePointsService = inject(HomeService);

}


