import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  registerForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  btnPressed: boolean = false; // تعريف المتغير

  SubmitData() {
    this.btnPressed = true; // لتفعيل تأثير الزر
    console.log(this.registerForm.value);
    // ضع هنا منطق التسجيل
  }
}
