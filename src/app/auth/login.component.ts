import { Component, OnInit, OnDestroy } from '@angular/core';

import { environment } from '@env/environment';
import { Logger } from '@core';

import { AuthService } from './auth.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  error: string | undefined;

  constructor(private authservice: AuthService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  login() {
    log.debug('doLogin');
    this.authservice.doLogin();
  }
}
