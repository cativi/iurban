import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../../pages/home/models/home-data';

@Component({
  selector: 'category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCardComponent {

  @Input() item: Item | undefined;

  // I need to access the properties of the "items" within each category (homepoints with type = "categories")

  //   export interface Item {
  //     id: number;
  //     type: Type;
  //     name: Claim;
  //     image: null | string;
  //     url: Claim | null;
  //     duration: number | null;
  //     durationc: Durationc | null;
  //     num_clicks: number;
  //     coordinates: null | string;
  //     nameSlug: Claim;
  //     subcategories: string[];
  //     accesibilities: any[];
  //     price: Price | null;
  //     priceFilter: null | string;
  //     popularity: number;
  //     start: Date | null;
  //     end: Date | null;
  //     categories: string[];
  // }

}


