import { Component, Input, inject } from '@angular/core';
import { ItemCardComponent } from '../../shared/components/item-card/item-card.component';
import { RecommendedRoutesList } from '../../pages/home/models/home-data';
import { HomeService } from '../../pages/home/services/home.service';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';


@Component({
  selector: 'rutas',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent extends CarouselComponent {

  @Input() recommendationList: RecommendedRoutesList[] | undefined;

  private recommendedRoutesService = inject(HomeService);

}

