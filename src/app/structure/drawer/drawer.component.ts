//
// Created by edgar on 3/5/24 at 09:06:54.
//

import {Component, Input} from '@angular/core';
import {Menu} from "@app/tmp/struct/Menu";
import {RouterLink} from "@angular/router";
import {NgEventBus} from "ng-event-bus";

@Component({
    selector: 'app-drawer',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
    @Input() menus: Menu[] = [];

    constructor(private eventBus: NgEventBus) {
    }

    clickOnMenu() {
        this.eventBus.cast<boolean>("open:drawer", false)
    }
}
