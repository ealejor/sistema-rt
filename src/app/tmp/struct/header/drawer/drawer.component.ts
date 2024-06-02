import { Component } from '@angular/core';
import {MenuMobileComponent} from "@app/tmp/struct/header/drawer/menu/menu.mobile.component";

@Component({
  selector: 'app-drawer',
  standalone: true,
    imports: [
        MenuMobileComponent

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
