import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import "normalize.css"

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/shared/header/header.component'

import { NavbarComponent } from './components/shared/navbar/navbar.component'

import { SideBarService } from "./services/side-bar.service";
import { CarouselComponent } from './components/shared/carousel/carousel.component'
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ResponsiveContainerComponent } from './components/shared/responsive-container/responsive-container.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    ResponsiveContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ SideBarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
