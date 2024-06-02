import { Component } from '@angular/core';
import {Menu} from "@app/struct/Menu";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-menu-desktop',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './menu.desktop.component.html',
  styleUrl: './menu.desktop.component.scss'
})
export class MenuDesktopComponent {
    menus: Menu[] = [
        {
            path: "/",
            title: 'Inicio',
            menu: []
        },
        {
            path: "/generalidades",
            title: 'Generalidades',
            menu: [
                {
                    path: "/generalidades/introducción",
                    title: 'Introducción',
                }
            ]
        },
        {
            path: "/video",
            title: 'Video',
            menu: []
        },
    ]
}
