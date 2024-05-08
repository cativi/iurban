import { Component, Input } from '@angular/core';
import { HeroSection } from '../../../pages/home/models/home-data';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input() data: HeroSection | undefined;
}
