/**
 * Title: composer.class.ts
 * Author: Rhonda Rivas
 * Date: Septmeber 15 2020
 * Description: Class file for the Composer object
 */

import { IComposer } from './composer.interface';

export class Composer {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Ludwig Van Beethoven", genre: "Classical"},
      {composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"},
      {composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
      {composerId: 103, fullName: "Alexandre Desplat", genre: "Classical"},
      {composerId: 105, fullName: "John Williams", genre: "Classical"}
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
