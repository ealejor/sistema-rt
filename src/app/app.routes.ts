import {Routes} from '@angular/router';
import {StructuredComponent} from "@app/pages/structured/structured.component";
import {OoComponent} from "@app/pages/oo/oo.component";
import {ErrorComponent} from "@app/pages/error/error.component";
import {AboutComponent} from "@app/pages/about/about.component";
import {HomeComponent} from "@app/pages/home/home.component";
import {IntroComponent} from "@app/components/intro/intro.component";
import {createComponent} from "@angular/core";

export const ROUTES = {
    STRUCTURED: 'diseño estructurado',
    OO: 'diseño orientado a objetos',
    ABOUT: 'acerca de'
};

export const routes: Routes = [
    {path: '', component: StructuredComponent},
    {path: 'inicio', component: HomeComponent},
    {path: ROUTES.STRUCTURED, component: StructuredComponent},
    {path: ROUTES.OO, component: OoComponent},
    {path: ROUTES.ABOUT, component: AboutComponent},
    {path: '**', component: ErrorComponent, pathMatch: 'full'},
    {path: 'introduccion', component: IntroComponent}
];

