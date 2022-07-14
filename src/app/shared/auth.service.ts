import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _fireauth: AngularFireAuth, private _router: Router) { }


//login

login(email: string, password: string){
  this._fireauth.signInWithEmailAndPassword(email, password).then(() => {
    localStorage.setItem('token', 'true');
    this._router.navigate(['/dashboard']);
  }, err => {
    alert(err.message);
    this._router.navigate(['/signin']);
  })
}


//register
register(email: string, password:string){
 return this._fireauth.createUserWithEmailAndPassword(email, password).then(() => {
    this._router.navigate(['/signin']);
  }, err => {
    alert(err.message);
    this._router.navigate(['/signup']);

  })
}

//signout

logout(){
  this._fireauth.signOut().then(() => {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  },err => {
    alert(err.message);
  })
}
}
