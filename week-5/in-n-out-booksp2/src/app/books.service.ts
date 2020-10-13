/**
 * Title: books.service.ts
 * Author: Rhonda Rivas
 * Date: October 12 2020
 * Description: Service class for book objects
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
  isbn: '0345339706',
  title: 'The Fellowship of the Ring',
  description: "The first volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them",
  numOfPages: 432,
  authors: ['J.R.R. Tolkien']
},
{
isbn: '0141439518',
title: 'Pride & Prejudice',
description: "Jane Austen's second book, written in 1813. This is a tale of a noble family's woes in society, tied into a convouluted plot of pride, prejudice and misconception between families, friends and suitors.",
numOfPages:480,
authors: ['Jane Austen']
},
{
isbn: '0061963865',
title: 'The Awakening (The Vampire Diaries, Vol. 1)',
description: "The first book in L.J. Smith’s New York Times bestselling Vampire Diaries series. Elena Gilbert is a high school golden girl, used to getting what she wants. And who she wants. But when the boy she’s set her sights on—the handsome and haunted Stefan—isn’t interested, she’s confused.",
numOfPages: 272,
authors: ['L.J Smith']
},
{
isbn: '0141441146',
title: 'Jane Eyre',
description: "A novel of intense power and intrigue, Jane Eyre has dazzled generations of readers with its depiction of a woman's quest for freedom, She grows up an orphan and finds her way in the world",
numOfPages: 624,
authors: ['Charlotte Bronte']
},
{
isbn: '0439708180',
title: 'Harry Potter and the Sorcerers Stone',
description: "The first in J.K's young adult book series, inducing ourselves to the boy who finds out he's a wizard and survived an attack on his family from an evil darl wizard.",
numOfPages: 309,
authors: ['J.K Rowling']
}
]
}

getBooks(): Observable<IBook[]> {
return of(this.books);
}

getBook(isbn: string): IBook {
for (let book of this.books) {
  if (book.isbn === isbn) {
    return book;
  }
}
}
}
