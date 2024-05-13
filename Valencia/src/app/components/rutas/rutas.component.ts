import { Component, Input } from '@angular/core';
import { ItemCardComponent } from '../../shared/components/item-card/item-card.component';
import { RecommendedRoutesList } from '../../pages/home/models/home-data';


@Component({
  selector: 'rutas',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {

  @Input() data: RecommendedRoutesList | undefined;

  //   export interface RecommendedRoutesList {
  //     id: number;
  //     name: Claim;
  //     image: string;
  //     route_days: number;
  // }

}
