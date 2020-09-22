import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

import { AuthService } from '../auth/auth.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Logger } from '@core';

const log = new Logger('Home');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  userData$: Observable<any>;
  accessToken$: any;
  secretData$: Observable<any>;
  isAuthenticated$: Observable<boolean>;

  constructor(private quoteService: QuoteService, private authservice: AuthService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
    this.userData$ = this.authservice.userData;
    this.accessToken$ = this.authservice.token;
    this.isAuthenticated$ = this.authservice.isLoggedIn;
  }

  callapi() {
    log.debug('callapi');
    this.secretData$ = this.httpClient
      .get('https://devkit-api-employeeprofile.azurewebsites.net/api/v1/Persons')
      .pipe(catchError((error) => of(error)));
    log.debug(this.secretData$);
  }
}
