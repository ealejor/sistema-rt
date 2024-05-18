//
// Created by edgar on 3/5/24 at 09:06:54.
//

import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
    value: string = '';

    send(): void {
        this.value = '';
    }

    public isMobile: boolean = false;

    constructor(private responsive: BreakpointObserver) {
    }

    public ngOnInit(): void {
        this.responsive.observe(
            "(max-width: 768px)"
        ).subscribe(result => {
            this.isMobile = result.matches;
        });
    }
}
