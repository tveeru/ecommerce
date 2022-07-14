import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent implements OnInit {
  UserDetails!: FormGroup;
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this.UserDetails = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })

  }

  onSubmit(){
    //console.log(this.UserDetails.value.email)
   this._auth.register(this.UserDetails.value.email,this.UserDetails.value.password);
  }
}
