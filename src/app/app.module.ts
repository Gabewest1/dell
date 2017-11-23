import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';

import { BreakpointsService } from "./services/breakpoints.service"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BreakpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
