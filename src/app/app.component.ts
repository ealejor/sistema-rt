import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StructureComponent} from "@app/components/structure/structure.component";
import {HeaderComponent} from "@app/components/header/header.component";
import {FooterComponent} from "@app/components/footer/footer.component";
import {DrawerComponent} from "@app/components/drawer/drawer.component";
import {Link} from "@app/components/header/Link";
import {ROUTES} from "@app/app.routes";
import {OnMenuHamburger} from "@app/components/header/OnMenuHamburger";
import {SfooterComponent} from "@app/components/sfooter/sfooter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, StructureComponent, HeaderComponent, FooterComponent, DrawerComponent, SfooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnMenuHamburger {
    openDrawer = true;
    links: Link[] = [
        {
            path: ROUTES.STRUCTURED,
            name: "Diseño Estructurado"
        },
        {
            path: ROUTES.OO,
            name: "Diseño Orientado a Objetos"
        }
    ];

    public onClick(): void {
        this.openDrawer = !this.openDrawer;
    }

    public close(): void {
        if (this.openDrawer) {
            this.openDrawer = false;
        }
    }
}
