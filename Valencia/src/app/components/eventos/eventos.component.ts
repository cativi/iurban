import { Component, Input, inject } from '@angular/core';
import { EventoCardComponent } from '../../shared/components/evento-card/evento-card.component';
import { Item } from '../../pages/home/models/home-data';
import { HomeService } from '../../pages/home/services/home.service';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';


@Component({
  selector: 'eventos',
  standalone: true,
  imports: [EventoCardComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent extends CarouselComponent {

  @Input() eventos: Item[] | undefined;

  @Input() set(eventosList: Item[]) {
    this.eventos = eventosList.filter(item => item.type === 'event')
  }

  private eventosService = inject(HomeService);


}

