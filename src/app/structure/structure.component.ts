//
// Created by edgar on 3/5/24 at 10:06:04.
//

import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {NgEventBus} from "ng-event-bus";
import {BreakpointObserver} from "@angular/cdk/layout";
import {BackgroundStructure} from "@app/structure/BackgroundStructure";

@Component({
    selector: 'app-structure',
    standalone: true,
    imports: [
        NgStyle,
        NgClass
    ],
    templateUrl: './structure.component.html',
    styleUrl: './structure.component.scss'
})
export class StructureComponent implements OnInit {
    @Input() color: BackgroundStructure = {
        header: "#fff",
        main: "#fff",
        footer: "#fff",
        sfooter: "#fff"
    }

    isMobile = false;

    @Input() paddingDesktop = 20;
    @Input() paddingMobile = 20;

    drawer = false;
    backdoor = false;

    constructor(
        private eventBus: NgEventBus,
        private responsive: BreakpointObserver
    ) {
    }

    ngOnInit(): void {
        this.eventBus.on<boolean>("open:drawer").subscribe(
            (meta) => {
                if (meta.data) {
                    this.drawer = true;
                    this.backdoor = true;
                } else {
                    this.drawer = false;
                    this.backdoor = false;
                }
            }
        )

        this.responsive.observe(
            "(max-width: 768px)"
        ).subscribe(result => {
            this.isMobile = result.matches;
        });
    }

    clickOnBackdoor() {
        this.eventBus.cast<boolean>("open:drawer", false);
    }
}

