import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HomeService } from './services/home.service';
import { HomeData } from './models/home-data';
import { HttpClient } from '@angular/common/http';
import { RutasComponent } from '../../components/rutas/rutas.component';


@Component({
  selector: 'home',
  standalone: true,
  imports: [HeroComponent, RutasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HttpClient]
})
export class HomeComponent implements OnInit {

  homeData: HomeData | undefined;

  private homeService = inject(HomeService);

  ngOnInit() {
    this.homeService.loadHomeData().subscribe((response: HomeData) => {
      this.homeData = response;
      console.log(response);
    })
  }

}
