import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from '../../../pages/home/models/home-data';

@Component({
  selector: 'category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryCardComponent {

  @Input() category: Category | undefined;
}

