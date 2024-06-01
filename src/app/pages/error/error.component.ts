import {Component, OnInit} from '@angular/core';
import {NgEventBus} from "ng-event-bus";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Event} from "@app/tmp/struct/Event";

@Component({
    selector: 'app-error',
    standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink
    ],
    templateUrl: './error.component.html',
    styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit {
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
