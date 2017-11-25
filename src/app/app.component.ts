import { Component } from '@angular/core';
import { Responsive } from "./components/shared/Responsive" 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Responsive {
  title = 'app';
}
