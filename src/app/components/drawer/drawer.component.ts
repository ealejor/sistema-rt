import {Component, Input} from '@angular/core';
import {Link} from "@app/components/header/Link";
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
export class DrawerComponent /*implements OnMenuHamburger*/ {
    @Input() links?: Link[];

    constructor(private eventBus: NgEventBus) {
    }

    onClick() {
        this.eventBus.cast<boolean>(
            "open",
            false
        )
    }
}
