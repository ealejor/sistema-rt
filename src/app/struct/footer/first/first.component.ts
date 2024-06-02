import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BreakpointObserver} from "@angular/cdk/layout";
import {BreakPoints} from "@app/struct/BreakPoints";
import {Event} from "@app/struct/Event";

@Component({
    selector: 'app-first-footer',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './first.component.html',
    styleUrl: './first.component.scss'
})
export class FirstFooterComponent implements OnInit {
    value: string = '';

    send(): void {
        this.value = '';
    }

    public isMobile: boolean = false;

    constructor(private responsive: BreakpointObserver) {
        this.isMobile = this.responsive.isMatched(BreakPoints.MOBILE);
    }

    public ngOnInit(): void {
        this.responsive.observe(Event.isMOBILE).subscribe(result => {
            this.isMobile = result.matches;
        });
    }
}
