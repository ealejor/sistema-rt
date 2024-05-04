import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Link} from "@app/components/header/Link";
import {OnMenuHamburger} from "@app/components/header/OnMenuHamburger";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterLink,
        NgOptimizedImage
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    isMobile = false;
    @Input() links?: Link[];
    @Input() listener?: OnMenuHamburger;

    public constructor(private responsive: BreakpointObserver) {
    }

    public ngOnInit(): void {
        this.responsive.observe(
            [Breakpoints.Handset]
        ).subscribe(result => {
            this.isMobile = result.matches;
        });
    }
}
