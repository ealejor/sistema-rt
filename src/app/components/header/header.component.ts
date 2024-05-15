//
// Created by e-alejo-r on 14/5/24 at 10:00:34.
//

import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Link} from "@app/common/Link";
import {NgEventBus} from "ng-event-bus";
import {ItemComponent} from "@app/components/item/item.component";
import {Item} from "@app/components/item/Item";

interface Menu {
    name: string
    path?: string
    sub?: Menu[]
}

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, ItemComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    isMobile: boolean = true;
    @Input() links!: Link[];

    a: Menu[] = [
        {
            name: "",
            sub: [
                {
                    name: "",
                    path: "",
                    sub: []
                }
            ]
        },
    ]

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
            this.eventBus.cast<boolean>("open", false);
        });
    }

    public clickOnIconHamburger() {
        this.eventBus.cast<boolean>("open", true);
    }

    items: Item[] = [
        {
            name: "Inicio",
            path: "inicio"
        },
        {
            name: "Generalidades",
            items: [
                {
                    name: "Introducción",
                    path: "introduccion"
                },
                {
                    name: "Antecedentes",
                    path: ""
                },
                {
                    name: "Planteamiento del Problema",
                    path: ""
                },
                {
                    name: "Árbol de Problemas",
                    path: ""
                },
                {
                    name: "Formula de Problemas",
                    path: ""
                },
                {
                    name: "Propósito de Estudio",
                    path: ""
                }
            ]
        },
        {
            name: "Marco Teórico",
            items: [
                {
                    name: "Marco Institucional",
                    path: ""
                },
                {
                    name: "Metodología de Desarrollo",
                    path: ""
                },
                {
                    name: "Inventario",
                    path: ""
                }
            ]
        },
        {
            name: "Análisis y Diseño Estructurado",
            items: [
                {
                    name: "Modelo Ambiental",
                    items: [
                        {
                            name: "Descripción del Propósito",
                            path: ""
                        },
                        {
                            name: "Lista de Eventos",
                            path: ""
                        },
                        {
                            name: "Diagrama de Contexto",
                            path: ""
                        }
                    ]
                },
                {
                    name: "Modelo de Comportamiento",
                    items: [
                        {
                            name: "DFD por niveles",
                            path: ""
                        },
                        {
                            name: "Diagrama entidad relación",
                            path: ""
                        },
                        {
                            name: "Diccionario de Datos",
                            path: ""
                        }
                    ]
                }
            ]
        },
        {
            name: "Análisis y Diseño Orientado a Objetos",
            items: [
                {
                    name: "Diagrama de Casos de Uso",
                    path: ""
                },
                {
                    name: "Diagrama de Clases",
                    path: ""
                },
                {
                    name: "Diagrama de Secuencia",
                    path: ""
                },
                {
                    name: "Diagrama de Flujo de Datos",
                    path: ""
                }
            ]
        },
        {
            name: "Video",
            path: "análisis y diseño orientado a objetos"
        }
    ]
}
