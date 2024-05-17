import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RecommendedRoutesList } from '../../../core/models/home-data';

@Component({
  selector: 'item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent {

  @Input() item: RecommendedRoutesList | undefined;

}

