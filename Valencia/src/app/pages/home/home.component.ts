import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
