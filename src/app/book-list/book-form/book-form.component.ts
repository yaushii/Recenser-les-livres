import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private booksService: BooksService,
              private Router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.bookForm = this.formBuilder.group({
      tittle: ['', Validators.required],
      author: ['', Validators.required],
      synopsis:''
    });
  }
  onSaveBook(){
    const tittle = this.bookForm.get('tittle').value;
    const author = this.bookForm.get('author').value;
    const synopsis = this.bookForm.get('synopsis').value;
    const newBook = new Book( tittle, author);
    newBook.synopsis = synopsis;
    this.booksService.createNewBook(newBook);
    this.Router.navigate(['/books']);
  }

}
