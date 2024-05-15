import { Component } from '@angular/core';
import {ButtonCommon} from "@app/common/button/button.common";

@Component({
  selector: 'app-structured',
  standalone: true,
    imports: [
        ButtonCommon
    ],
  templateUrl: './structured.component.html',
  styleUrl: './structured.component.scss'
})
export class StructuredComponent {

}
