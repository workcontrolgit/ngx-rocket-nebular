import { Routes, Route } from '@angular/router';

import { AuthenticationGuard, AuthGuard } from '@app/auth';
import { ShellComponent } from './shell.component';

//import { AuthGuard } from '@core/authentication/auth.guard';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */

  // static childRoutes(routes: Routes): Route {
  //   return {
  //     path: '',
  //     component: ShellComponent,
  //     children: routes,
  //     canActivate: [AuthGuard],
  //     // Reuse ShellComponent instance when navigating between child views
  //     data: { reuse: true },
  //   };
  // }

  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    };
  }
}
