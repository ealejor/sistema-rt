import {Component, Input, OnInit} from '@angular/core';
import {Color} from "@app/structure/Color";
import {NgClass, NgStyle} from "@angular/common";
import {NgEventBus} from "ng-event-bus";

export interface BackgroundColor {
    header: Color
    main: Color
    footer: Color
    sfooter: Color
}

export interface Padding {
    left: number;
    right: number;
}

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
    @Input() padding: Padding = {left: 10, right: 10};
    @Input() color: BackgroundColor = {
        header: "#fff",
        main: "#fff",
        footer: "#fff",
        sfooter: "#fff"
    }

    drawer = false;
    backdoor = false;

    constructor(private eventBus: NgEventBus) {
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
    }

    onClick() {
        this.eventBus.cast<boolean>("open", false);
    }
}
