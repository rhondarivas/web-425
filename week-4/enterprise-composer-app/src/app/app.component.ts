/**
 * Title: app.component.ts
 * Author: Rhonda Rivas
 * Date: September 27 2020
 * Description: App Component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 3.4 - Handling Events with Observables';
}
