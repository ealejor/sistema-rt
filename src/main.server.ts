import {bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import {config} from '@app/app.config.server';
import {StructComponent} from "@app/tmp/struct/struct.component";

/*const bootstrap = () => bootstrapApplication(AppComponent, config);*/
const bootstrap = () => bootstrapApplication(StructComponent, config);

export default bootstrap;
