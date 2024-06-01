import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from '@app/app.config';
import {AppComponent} from '@app/app.component';
import {StructComponent} from "@app/tmp/struct/struct.component";

bootstrapApplication(StructComponent, appConfig)
    .catch((err) => console.error(err));

