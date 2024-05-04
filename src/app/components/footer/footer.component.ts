import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    value: string = '';

    send(): void {
        this.value = '';
    }
}
