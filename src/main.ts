import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from '@app/app.config';
import {StructComponent} from "@app/struct/struct.component";

bootstrapApplication(
    StructComponent, appConfig
).catch((err) => console.error(err));

