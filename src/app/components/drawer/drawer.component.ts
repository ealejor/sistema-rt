import {Component, Input} from '@angular/core';
import {Link} from "@app/common/Link";
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
    @Input() links?: Link[];

    constructor(private eventBus: NgEventBus) {
    }

    clickOnList() {
        this.eventBus.cast<boolean>(
            "open",
            false
        )
    }
}
