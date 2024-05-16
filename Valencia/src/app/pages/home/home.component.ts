import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HomeService } from './services/home.service';
import { HomeData, HomePoint, RecommendedRoutesList } from './models/home-data'; import { HttpClient } from '@angular/common/http';
import { RutasComponent } from '../../components/rutas/rutas.component';
import { EventosComponent } from '../../components/eventos/eventos.component';
import { CategoriesComponent } from '../../components/categories/categories.component';

@Component({ selector: 'home', standalone: true, imports: [HeroComponent, RutasComponent, EventosComponent, CategoriesComponent], templateUrl: './home.component.html', styleUrl: './home.component.css', providers: [HttpClient] })

export class HomeComponent implements OnInit {

  homeData: HomeData | null = null;
  recommendedRoutes: RecommendedRoutesList[] | undefined;
  categories: HomePoint[] | undefined;

  private homeService = inject(HomeService);

  ngOnInit() {
    this.homeService.loadHomeData().subscribe((response: HomeData) => { this.homeData = response; this.recommendedRoutes = response.recommendedRoutesList; this.categories = response.homePoints.filter(item => item.type === 'categories') });
  }
}