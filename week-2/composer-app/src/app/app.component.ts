/**
 * Title: app.component.ts
 * Author: Rhonda Rivas
 * Date: September 13 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 2.4 - Routing in Action';
}
