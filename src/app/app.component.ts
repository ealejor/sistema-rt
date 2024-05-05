import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StructureComponent} from "@app/components/structure/structure.component";
import {HeaderComponent} from "@app/components/header/header.component";
import {FooterComponent} from "@app/components/footer/footer.component";
import {DrawerComponent, EventDataHamburger} from "@app/components/drawer/drawer.component";
import {Link} from "@app/components/header/Link";
import {ROUTES} from "@app/app.routes";
import {OnMenuHamburger} from "@app/components/header/OnMenuHamburger";
import {SfooterComponent} from "@app/components/sfooter/sfooter.component";
import {Padding, StructComponent} from "@app/structure/struct/struct.component";
import {MetaData, NgEventBus} from 'ng-event-bus';
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, StructureComponent, HeaderComponent, FooterComponent, DrawerComponent, SfooterComponent, StructComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnMenuHamburger, OnInit, OnDestroy {
    ngOnDestroy(): void {
        //this.eventBus.on("")
    }

    padding: Padding = {left: 30, right: 30};

    openDrawer = false;
    openBackdoor = false;
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

    constructor(private eventBus: NgEventBus) {
    }

    ngOnInit(): void {
        this.eventBus.on<EventDataHamburger>('edgar').subscribe(
            (meta: MetaData<EventDataHamburger>) => {
                console.log(`key: ${meta.key}`)
                console.log(`data: ${meta.data?.drawer}`)
                console.log(`data: ${meta.data?.backdoor}`)
                console.log(`id: ${meta.id}`)
                console.log(`timestamp: ${meta.timestamp}`)
            }
        );
    }

    public onClick(): void {
        this.openDrawer = !this.openDrawer;
        this.openBackdoor = !this.openBackdoor;
        /*this.eventBus.cast<boolean>("app:start", true);*/
    }
}
