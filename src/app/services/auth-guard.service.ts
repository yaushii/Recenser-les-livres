import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { reject } from 'q';
import * as firebase from 'firebase'
;@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | Boolean {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if(user) {
              resolve(true);
            }else{
              this.router.navigate(['/auth','signin']);
              resolve(false);
            }
          }
        );
      }
    );
  }

}
