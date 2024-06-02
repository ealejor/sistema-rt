import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-last-footer',
    standalone: true,
    imports: [],
    templateUrl: './last.component.html',
    styleUrl: './last.component.scss'
})
export class LastFooterComponent implements OnInit {
    currentYear: number;

    constructor() {
        this.currentYear = new Date().getFullYear();
    }

    ngOnInit(): void {
    }
}
