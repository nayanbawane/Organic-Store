import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavHeadComponent } from './nav-head/nav-head.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeadComponent,
    MainPageComponent,
    FooterComponent,
    Footer2Component,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    NavHeadComponent,
    MainPageComponent,
    FooterComponent,
    Footer2Component,
  ],
})
export class AppModule {}
