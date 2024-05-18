import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "@app/structure/header/header.component";
import {FooterComponent} from "@app/structure/footer/footer.component";
import {DrawerComponent} from "@app/structure/drawer/drawer.component";
import {Menu} from "@app/structure/Menu";
import {SfooterComponent} from "@app/structure/sfooter/sfooter.component";
import {StructureComponent} from "@app/structure/structure.component";
import {BackgroundStructure} from "@app/structure/BackgroundStructure";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, DrawerComponent, SfooterComponent, StructureComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    color: BackgroundStructure = {
        footer: '#f98f00',
        sfooter: '#2e3349ff',
        header: '#fff',
        main: '#fff'
    }

    menus: Menu[] = [
        {title: 'Inicio', path: ''},
        {
            title: 'Generalidades',
            menu: [
                {title: 'Introducción', path: ''},
                {title: 'Antecedentes', path: ''},
                {title: 'Planteamiento del Problema', path: ''},
                {title: 'Árbol de Problemas', path: ''},
                {title: 'Propósito de Estudio', path: ''},
                {title: 'Metodología de la Investigación', path: ''},
                {title: 'Método, Medios e Instrumentos', path: ''},
                {title: 'Planificación de Actividades', path: ''},
            ]
        },
        {
            title: 'Marco Teórico',
            menu: [
                {title: 'Marco Institucional', path: ''},
                {title: 'Metodología de Desarrollo', path: ''},
                {title: 'Inventario', path: ''},
            ]
        },
        {title: 'Análisis y Diseño Estructurado', path: ''},
        {title: 'Análisis y Diseño Orientado a Objetos', path: ''},
        {title: 'Vídeo', path: ''},
    ];
}
