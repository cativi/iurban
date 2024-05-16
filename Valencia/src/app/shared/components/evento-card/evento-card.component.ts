import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category, HomePoint, Item } from '../../../pages/home/models/home-data';

@Component({
  selector: 'evento-card',
  standalone: true,
  imports: [],
  templateUrl: './evento-card.component.html',
  styleUrl: './evento-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventoCardComponent {

  @Input() event: Item | undefined;

  @Input() homePoint: HomePoint | undefined;
  @Input() ctg: Category | undefined;

}

