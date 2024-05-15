import { Component, HostListener, Input, inject } from '@angular/core';
import { EventoCardComponent } from '../../shared/components/evento-card/evento-card.component';
import { HomePoint } from '../../pages/home/models/home-data';
import { HomeService } from '../../pages/home/services/home.service';


@Component({
  selector: 'eventos',
  standalone: true,
  imports: [EventoCardComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

  @Input() eventos: HomePoint[] | undefined;

  constructor() { }

  @Input() set(eventosList: HomePoint[]) {
    this.eventos = eventosList.filter(item => item.type === 'event')
  }

  private eventosService = inject(HomeService);

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
    if (this.eventos?.length &&
      this.currentIndex + 4 < this.eventos.length) {
      this.currentIndex += 4;
    }
  }

  previousItems() {
    if (this.currentIndex - 4 >= 0) {
      this.currentIndex -= 4;
    }
  }
}

