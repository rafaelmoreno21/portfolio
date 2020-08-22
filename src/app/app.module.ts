import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from '../app/components/about-me/about-me.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components//footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}