import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataSevice } from '../data-sevice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  btnPressed: boolean = false; // تعريف المتغير

  constructor(private _DataService: DataSevice, private _Router: Router) {}

  SubmitData() {
    this.btnPressed = true; // لتفعيل تأثير الزر
    console.log(this.loginForm.value);

    this._DataService.userLogin(this.loginForm.value).subscribe((data) => {
      console.log(data);
      if (data.error == undefined) {
        this._Router.navigate(['/cat']);
        this._DataService.islogined.next(true);
      }
    });
  }
}
