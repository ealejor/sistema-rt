import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
    selector: 'app-oo',
    standalone: true,
    imports: [],
    templateUrl: './oo.component.html',
    styleUrl: './oo.component.scss'
})
export class OoComponent implements OnInit {
    isMobile: boolean = true;

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
