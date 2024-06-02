import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NgEventBus} from "ng-event-bus";
import {Event} from "@app/struct/Event";

@Component({
    selector: 'app-notfound',
    standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink
    ],
    templateUrl: './notfound.component.html',
    styleUrl: './notfound.component.scss'
})
export class NotfoundComponent implements OnInit {
    isMobile: boolean = false;

    constructor(
        private eventBus: NgEventBus
    ) {
        this.eventBus.cast<boolean>(Event.notFOUND, true);
    }

    public ngOnInit(): void {
        this.eventBus.on<boolean>(Event.isMOBILE).subscribe(result => {
            this.isMobile = result.data !== undefined ? result.data : this.isMobile;
        });
    }

    public clickInStart(): void {
        this.eventBus.cast<boolean>(Event.notFOUND, false);
    }
}
