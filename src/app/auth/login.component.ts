import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { AuthenticationService } from './authentication.service';

import { Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  userData$: Observable<any>;
  secretData$: Observable<any>;
  isAuthenticated$: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private authenticationService: AuthenticationService
  ) {
    //this.createForm();
  }

  ngOnInit() {
    this.userData$ = this.authservice.userData;
    this.isAuthenticated$ = this.authservice.isLoggedIn;
  }

  ngOnDestroy() {}

  login() {
    this.authservice.doLogin();
  }

  login2() {
    this.isLoading = true;
    //this.authservice.doLogin();
    this.isAuthenticated$ = this.authservice.isLoggedIn;

    //const login$ = this.authenticationService.login(this.loginForm.value);
    // login$
    //   .pipe(
    //     finalize(() => {
    //       //this.loginForm.markAsPristine();
    //       this.isLoading = false;
    //     }),
    //     untilDestroyed(this)
    //   )
    //   .subscribe(
    //     (credentials) => {
    //       log.debug(`${credentials.username} successfully logged in`);
    //       this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
    //     },
    //     (error) => {
    //       log.debug(`Login error: ${error}`);
    //       this.error = error;
    //     }
    //   );
  }

  logout() {
    this.authservice.signOut();
  }

  // private createForm() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //     remember: true,
  //   });
  // }
}
