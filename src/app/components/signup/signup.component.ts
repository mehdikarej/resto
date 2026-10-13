import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup;
  path!: string;
  errorMsg: string = "";
  constructor(private formBuilder: FormBuilder, private userService: UserService,private router:Router) { }
  ngOnInit(): void {
    this.path=this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      lastName: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      email: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      phoneNumber: ["", [Validators.required, Validators.pattern(/^(?:\+216|00216|0)?[ -]?(?:\d{2}[ -]?){3}\d{2}$/)]],
      password: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      specialty: ["", [Validators.required, Validators.minLength(3)]],
      experience: ["", [Validators.required, Validators.minLength(4)]]
    });
  }
  signup() {
    if (this.path == "/signup") {
      this.signupForm.value.roles = ['client'];
    }
    else
      if (this.path == "/signupChief") {
        this.signupForm.value.roles = ['chief'];
      }
      else {
        this.signupForm.value.roles = ['admin'];
      }
    console.log("Here user", this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe({
      next: (res) => {
        console.log("Here response from BE:Success", res);
      },
      error: (err) => {
        console.log("Here error", err);
        if (err.status === 409) {
          this.errorMsg = "Email already exists";
        }
      }

    })

  }
}
