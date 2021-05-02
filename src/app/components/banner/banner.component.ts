import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Banner } from 'src/app/models/banner';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {

  public banner: Banner;
  subscription: Subscription;
  bodyCollapsed = true;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.subscription = this.apiService.getBannerData()
      .subscribe((res: Banner) => {
        this.banner = { ...res };
      });
  }

  saveSettings() { 
    
  }

  acceptAll() { 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
