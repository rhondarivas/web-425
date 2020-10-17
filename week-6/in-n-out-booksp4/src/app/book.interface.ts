/**
 * Title: book.interface.ts
 * Author: Rhonda Rivas
 * Date: October 13 2020
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
