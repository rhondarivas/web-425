/**
 * Title: my-image.component.ts
 * Author: Rhonda Rivas
 * Date: September 11 2020
 * Description: My image view
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = true;
  assignment: string = 'Assignment 2.3 - Data Binding';
}
