import {Component, Input} from '@angular/core';
import {Color} from "@app/structure/Color";
import {NgClass, NgStyle} from "@angular/common";

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
export class StructComponent {
    @Input() padding: Padding = {left: 10, right: 10};
    @Input() color: BackgroundColor = {
        header: "#ff7272",
        main: "#fff",
        footer: "#fff",
        sfooter: "#472828"
    }

    hidden() {
        this.backdoor = false
        this.drawer = false;
    }

    @Input() drawer = false;
    @Input() backdoor = false;
}
