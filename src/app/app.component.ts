import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDewzP-CMmds3Bi1Bj4hJFN8iiihfb3yRg",
    authDomain: "angular2-afbd7.firebaseapp.com",
    databaseURL: "https://angular2-afbd7.firebaseio.com",
    projectId: "angular2-afbd7",
    storageBucket: "",
    messagingSenderId: "552863710744",
    appId: "1:552863710744:web:662621f56253ce7e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
