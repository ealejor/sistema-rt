import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
    selector: 'app-video',
    standalone: true,
    imports: [],
    templateUrl: './video.component.html',
    styleUrl: './video.component.scss'
})
export class VideoComponent implements OnInit {
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
