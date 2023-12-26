import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballLeaguesComponent } from './components/football-leagues/football-leagues.component';
import { FootballLeagueDetailsComponent } from './components/football-league-details/football-league-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/football-teams', pathMatch: 'full' },
  { path: 'football-teams', component: FootballLeaguesComponent },
  { path: 'football-teams/:teamNumber', component: FootballLeagueDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
