import { Component } from '@angular/core';
import {MenuComponent} from "@app/tmp/struct/header/drawer/menu/menu.component";

@Component({
  selector: 'app-drawer',
  standalone: true,
    imports: [
        MenuComponent
    ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
    currentYear: number;

    constructor() {
        this.currentYear = new Date().getFullYear();
    }
}
