import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FootballLeagueDetailsComponent } from './components/football-league-details/football-league-details.component';
import { FootballLeaguesComponent } from './components/football-leagues/football-leagues.component';
import { FootBallRapiKeyInterceptor } from './services/app.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    FootballLeagueDetailsComponent,
    FootballLeaguesComponent,
  ],
  providers: [
    // Register your interceptor here
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FootBallRapiKeyInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
