import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
    selector: 'app-structured',
    standalone: true,
    imports: [],
    templateUrl: './structured.component.html',
    styleUrl: './structured.component.scss'
})
export class StructuredComponent implements OnInit {
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
