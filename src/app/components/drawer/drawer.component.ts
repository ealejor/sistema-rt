import {Component, Input} from '@angular/core';
import {Link} from "@app/components/header/Link";
import {OnMenuHamburger} from "@app/components/header/OnMenuHamburger";
import {RouterLink} from "@angular/router";
import {NgEventBus} from "ng-event-bus";

export interface EventDataHamburger {
    drawer: boolean;
    backdoor: boolean;
}

export enum EventKeyMenu {
    EVENT_MENU = "event_menu",
}

@Component({
    selector: 'app-drawer',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.scss'
})
export class DrawerComponent implements OnMenuHamburger {
    @Input() links?: Link[];
    @Input() listener?: OnMenuHamburger;

    @Input() drawer = false;
    @Input() backdoor = false;

    constructor(private eventBus: NgEventBus) {
    }

    changeOpen() {
        this.drawer = false;
    }

    onClick(): void {
        this.drawer = false;
        this.backdoor = false;
    }

    ok() {
        const data: EventDataHamburger = {drawer: true, backdoor: true}
        this.eventBus.cast<EventDataHamburger>(
            "edgar",
            data
        )
    }
}
