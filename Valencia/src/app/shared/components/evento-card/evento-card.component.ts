import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../../pages/home/models/home-data';

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

  ngOnInit() {
    if (this.item?.type === "events") {
      this.item.events?.forEach((item) => {
        // console.log(event.image);
      });
    }
  }
}

