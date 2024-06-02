import {bootstrapApplication} from '@angular/platform-browser';
import {config} from '@app/app.config.server';
import {StructComponent} from "@app/struct/struct.component";

const bootstrap = () => bootstrapApplication(StructComponent, config);

export default bootstrap;
