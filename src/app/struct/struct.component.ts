import {
    Component,
    OnInit
} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {NgEventBus} from "ng-event-bus";
import {NgClass, NgStyle} from "@angular/common";
import {HeaderComponent} from "@app/struct/header/header.component";
import {MainComponent} from "@app/struct/main/main.component";
import {BreakPoints} from "@app/struct/BreakPoints";
import {Event} from "@app/struct/Event";
import {LastFooterComponent} from "@app/struct/footer/last/last.component";
import {FirstFooterComponent} from "@app/struct/footer/first/first.component";

type RGB = `rgb(${number},${number},${number})` | `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number},${number},${number},${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type ColorStructure = RGB | RGBA | HEX;

interface Padding {
    'padding-left': string;
    'padding-right': string;
}

@Component({
    selector: 'app-struct',
    standalone: true,
    imports: [
        HeaderComponent,
        RouterOutlet,
        NgClass,
        NgStyle,
        MainComponent,
        LastFooterComponent,
        FirstFooterComponent
    ],
    templateUrl: './struct.component.html',
    styleUrl: './struct.component.scss'
})
export class StructComponent implements OnInit {
    isMobile: boolean = false;
    firstFooter: boolean = true;
    isNotFound: boolean = false;

    public constructor(
        private breakpoint: BreakpointObserver,
        private eventBus: NgEventBus
    ) {
        this.isMobile = this.breakpoint.isMatched(BreakPoints.MOBILE);
    }

    public ngOnInit(): void {
        this.breakpoint.observe(BreakPoints.MOBILE).subscribe(result => {
            this.isMobile = result.matches;
            this.eventBus.cast<boolean>(Event.isMOBILE, this.isMobile);
        });

        this.eventBus.on<boolean>(Event.firstFOOTER).subscribe(result => {
            if (result.data != undefined) {
                this.firstFooter = result.data;
            }
        });

        this.eventBus.on<boolean>(Event.notFOUND).subscribe(result => {
            if (result.data != undefined) {
                this.isNotFound = result.data;
            }
        });
    }

    public getPadding(): Padding {
        const mobile: number = 1;
        const desktop: number = 3;
        return {
            'padding-left': this.isMobile ? mobile + 'rem' : desktop + 'rem',
            'padding-right': this.isMobile ? mobile + 'rem' : desktop + 'rem'
        }
    }
}
