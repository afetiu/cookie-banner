import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AccordionItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
