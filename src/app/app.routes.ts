import {Routes} from '@angular/router';
import {AboutComponent} from "@app/pages/about/about.component";
import {NotfoundComponent} from "@app/pages/notfound/notfound.component";
import {HomeComponent} from "@app/pages/home/home.component";
import {VideoComponent} from "@app/pages/video/video.component";
import {GeneralComponent} from "@app/pages/general/general.component";
import {IntroductionComponent} from "@app/pages/general/introduction/introduction.component";
import {ObjectOrientedDesignComponent} from "@app/pages/object-oriented-design/object-oriented-design.component";
import {StructuredDesignComponent} from "@app/pages/structured-design/structured-design.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'generalidades', component: GeneralComponent,
        children: [
            {path: 'introducción', component: IntroductionComponent}
        ]
    },
    {
        path: 'análisis-y-diseño-estructurado', component: StructuredDesignComponent
    },
    {
        path: 'análisis-y-diseño-orientado-a-objetos', component: ObjectOrientedDesignComponent
    },
    {path: 'video', component: VideoComponent},
    {path: 'acerca-de', component: AboutComponent},
    {path: '**', component: NotfoundComponent, pathMatch: 'full'}
];

