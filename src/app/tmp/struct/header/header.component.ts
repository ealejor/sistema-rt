import {Component, OnInit, Renderer2} from '@angular/core';
import {NgEventBus} from "ng-event-bus";
import {NgStyle} from "@angular/common";
import {DrawerComponent} from "@app/tmp/struct/header/drawer/drawer.component";
import {MenuComponent} from "@app/tmp/struct/header/menu/menu.component";
import {Event} from "@app/tmp/struct/Event";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NgStyle,
        DrawerComponent,
        MenuComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

    isMobile: boolean = true;
    openDrawer: boolean = false;
    openBackdrop: boolean = false;

    public constructor(
        private eventBus: NgEventBus,
    ) {

    }

    /**
     * @description
     */
    public ngOnInit(): void {
        this.eventBus.on<boolean>(Event.isMOBILE).subscribe(result => {
            this.isMobile = result.data !== undefined ? result.data : this.isMobile;
        });
    }

    /**
     * Este método se invoca cuando se hace clic en el **telón de fondo** (backdrop).
     * Establece las propiedades `openDrawer` y `openBackdrop` en `false` para cerrar el **cajón
     * de navegación** y el **telón de fondo**.
     */
    public clickInBackdrop(): void {
        this.openDrawer = false;
        this.openBackdrop = false;
    }

    /**
     * Este método se invoca cuando se hace clic en el icono de la hamburguesa (iconBurger).
     * Establece las propiedades `openDrawer` y `openBackdrop` en `true` para abrir el **cajón
     * de navegación** y **el telón de fondo**.
     */
    public clickInIconBurger(): void {
        this.openDrawer = true;
        this.openBackdrop = true;
    }

    /**
     * Este método se invoca cuando se hace clic en el icono de cierre (iconClose) o en un elemento del menú (item).
     * Establece las propiedades `openDrawer` y `openBackdrop` en `false` para cerrar el **cajón de
     * navegación** y el **telón de fondo**.
     */
    public clickInIconCloseOrItem(): void {
        this.openDrawer = false;
        this.openBackdrop = false;
    }

    public getHeight() {
        return {
            'height': this.isMobile ? 60 + 'px' : 70 + 'px'
        }
    }

}
