import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  users: User[] = [];

  constructor() {
  }

  name = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required, Validators.min(1)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  myForm = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email
  });

  ngOnInit(): void {
  }

  onFormSubmit(myForm: FormGroup): void {
    this.users.push({
      name: myForm.controls.name.value,
      age: +myForm.controls.age.value,
      email: myForm.controls.email.value
    });
    console.log(this.users);
    console.log(myForm);
  }
}
