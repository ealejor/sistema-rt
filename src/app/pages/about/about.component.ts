import {Component} from '@angular/core';
import {Item} from "@app/components/item/Item";
import {MenuComponent} from "@app/components/menu/menu.component";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        MenuComponent
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    items: Item[] = [
        {
            name: "Inicio",
            path: ""
        },
        {
            name: "Generalidades",
            items: [
                {
                    name: "Introducción",
                    path: ""
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
            path: ""
        }
    ]
}
