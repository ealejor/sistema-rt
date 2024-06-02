//
// Created by edgar on 14/5/24 at 10:00:34.
//

import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Menu} from "@app/tmp/struct/Menu";
import {NgEventBus} from "ng-event-bus";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    isMobile: boolean = true;
    @Input() menus: Menu[] = [];

    public constructor(
        private responsive: BreakpointObserver,
        private eventBus: NgEventBus
    ) {
    }

    public ngOnInit(): void {
        this.responsive.observe(
            "(max-width: 768px)"
        ).subscribe(result => {
            this.isMobile = result.matches;
            this.eventBus.cast<boolean>("open:drawer", false);
        });
    }

    public clickInBurger() {
        this.eventBus.cast<boolean>("open:drawer", true);
    }
}
