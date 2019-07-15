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
    apiKey: "AIzaSyDdgB8FLxv6Ni_sAxKvwGkbBKPKQXf-lFc",
    authDomain: "angular2-8d809.firebaseapp.com",
    databaseURL: "https://angular2-8d809.firebaseio.com/",
    projectId: "angular2-8d809",
    storageBucket: "angular2-8d809.appspot.com",
    messagingSenderId: "807735918493",
    appId: "1:807735918493:web:aa5636e92153e79b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
