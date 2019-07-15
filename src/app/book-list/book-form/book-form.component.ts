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
  filesIsUploading = false;
  filleUrl:string;
  filleUpload = false;

  constructor(private formBuilder: FormBuilder,
              private booksService: BooksService,
              private Router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis:''
    });
  }
  onSaveBook(){
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const synopsis = this.bookForm.get('synopsis').value;
    const newBook = new Book( title, author);
    newBook.synopsis = synopsis;
    if(this.filleUrl && this.filleUrl !==''){
      newBook.photo = this.filleUrl;
    }
    this.booksService.createNewBook(newBook);
    this.Router.navigate(['/books']);
  }

  onUploadFile(file: File){
    this.filesIsUploading = true;
    this.booksService.uploadFile(file).then(
      (url: string) =>{
        this.filleUrl = url;
        this.filesIsUploading = false;
        this.filleUpload = true;
      }
    );
  }
  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}
