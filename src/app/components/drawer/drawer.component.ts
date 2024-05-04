import {Component, Input} from '@angular/core';
import {Link} from "@app/components/header/Link";
import {OnMenuHamburger} from "@app/components/header/OnMenuHamburger";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-drawer',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
    @Input() links?: Link[];
    @Input() listener?: OnMenuHamburger;
    @Input() open = false;

    changeOpen() {
        this.open = false;
    }
}
