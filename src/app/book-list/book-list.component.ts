import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];
  booksSubscription: Subscription;

  constructor(private booksService: BooksService,
                private router: Router) { }

  ngOnInit() {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.emitBooks();
  }

  onBook(){
    this.router.navigate(['/books', 'new']);
  }

  onDelete(book: Book){
    this.booksService.removeBook(book);
  }

  inViewBook(id: number) {
    this.router.navigate(['/books', 'view',id]);
  }

  ngOnDestroy(){
    this.booksSubscription.unsubscribe();
  }
}
