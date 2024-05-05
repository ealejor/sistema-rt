import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Link} from "@app/components/header/Link";
import {NgEventBus} from "ng-event-bus";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    isMobile = false;
    @Input() links?: Link[];

    public constructor(
        private responsive: BreakpointObserver,
        private eventBus: NgEventBus
    ) {
    }

    public ngOnInit(): void {
        this.responsive.observe(
            [Breakpoints.Handset]
        ).subscribe(result => {
            this.isMobile = result.matches;
            this.eventBus.cast<boolean>("open", false);
        });
    }

    public onClick() {
        this.eventBus.cast<boolean>("open", true);
    }
}
