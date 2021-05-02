import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'banner-cookie-app';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData() 
  }

  getData() {
    this.apiService.getBannerData().subscribe(res => {
      console.log(res)
    }
    )
  }



}
