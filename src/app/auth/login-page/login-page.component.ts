import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  formState: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public changeFromState() {
    this.formState = !this.formState;
  }
}
