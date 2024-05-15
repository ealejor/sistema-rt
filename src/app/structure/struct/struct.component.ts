import {Component, Input, OnInit} from '@angular/core';
import {Color} from "@app/common/Color";
import {NgClass, NgStyle} from "@angular/common";
import {NgEventBus} from "ng-event-bus";
import {BreakpointObserver} from "@angular/cdk/layout";

export interface BackgroundColor {
    header: Color
    main: Color
    footer: Color
    sfooter: Color
}

/*export interface Padding {
    left: number;
    right: number;
}*/

@Component({
    selector: 'app-struct',
    standalone: true,
    imports: [
        NgStyle,
        NgClass
    ],
    templateUrl: './struct.component.html',
    styleUrl: './struct.component.scss'
})
export class StructComponent implements OnInit {
    @Input() color: BackgroundColor = {
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
        this.eventBus.on<boolean>("open").subscribe(
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
        this.eventBus.cast<boolean>("open", false);
    }
}
