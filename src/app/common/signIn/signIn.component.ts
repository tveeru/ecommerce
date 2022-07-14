import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss']
})
export class SignInComponent implements OnInit {
  UserDetails: FormGroup | undefined;

  constructor() { }

  ngOnInit() {
      this.UserDetails = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })


  }

}
