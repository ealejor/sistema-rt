import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "@app/tmp/struct/header/header.component";
import {RouterOutlet} from "@angular/router";
import {OfooterComponent} from "@app/tmp/struct/ofooter/ofooter.component";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NgEventBus} from "ng-event-bus";
import {FooterComponent} from "@app/tmp/struct/footer/footer.component";
import {NgClass, NgStyle} from "@angular/common";
import {MainComponent} from "@app/tmp/struct/main/main.component";
import {BreakPoints} from "@app/tmp/struct/BreakPoints";
import {Event} from "@app/tmp/struct/Event";

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
        OfooterComponent,
        FooterComponent,
        NgClass,
        NgStyle,
        MainComponent
    ],
    templateUrl: './struct.component.html',
    styleUrl: './struct.component.scss'
})
export class StructComponent implements OnInit {
    isMobile: boolean = true;
    firstFooter: boolean = true;
    isNotFound: boolean = false;

    public constructor(
        private responsive: BreakpointObserver,
        private eventBus: NgEventBus
    ) {
        /*this.eventBus.cast<boolean>(
            Event.isMOBILE,
            this.responsive.isMatched("(max-width: 768px)")
        );*/
    }

    public ngOnInit(): void {
        this.responsive.observe('(max-width: 768px)').subscribe(result => {
            this.isMobile = result.matches;
            //this.eventBus.cast<boolean>(Event.isMOBILE, result.matches);
            console.log("isMobile", result.matches);
        });

        this.eventBus.on<boolean>(Event.showFOOTER).subscribe(result => {
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
