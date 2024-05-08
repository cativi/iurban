import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../core/services/api/api.service';
import { Observable } from 'rxjs';
import { HomeData } from '../models/home-data';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiService = inject(ApiService);

  constructor() { }

  loadHomeData(): Observable<HomeData> {
    return this.apiService.get<HomeData>('get-home-app-data/testvalencia')
  }
}
