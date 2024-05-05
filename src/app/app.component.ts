import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "@app/components/header/header.component";
import {FooterComponent} from "@app/components/footer/footer.component";
import {DrawerComponent} from "@app/components/drawer/drawer.component";
import {Link} from "@app/components/header/Link";
import {ROUTES} from "@app/app.routes";
import {SfooterComponent} from "@app/components/sfooter/sfooter.component";
import {BackgroundColor, Padding, StructComponent} from "@app/structure/struct/struct.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, DrawerComponent, SfooterComponent, StructComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    padding: Padding = {left: 30, right: 30};
    color: BackgroundColor = {
        footer: '#f98f00',
        sfooter: '#2e3349ff',
        header: '#fff',
        main: '#fff'
    }

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
}
