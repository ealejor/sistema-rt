import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
