import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
    selector: 'app-ofooter',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './ofooter.component.html',
    styleUrl: './ofooter.component.scss'
})
export class OfooterComponent implements OnInit {
    value: string = '';

    send(): void {
        this.value = '';
    }

    public isMobile: boolean = false;

    constructor(private responsive: BreakpointObserver) {
        this.isMobile = this.responsive.isMatched("(max-width: 768px)");
    }

    public ngOnInit(): void {
        this.responsive.observe("(max-width: 768px)").subscribe(result => {
            this.isMobile = result.matches;
        });
    }
}
