import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FootballLeagueService } from '../../services/football-league.service';
import { ActivatedRoute } from '@angular/router';
import { LeagueApiResponse, StandingsData } from '../../models/football-league';

@Component({
  selector: 'app-football-leagues',
  templateUrl: './football-leagues.component.html',
  styleUrl: './football-leagues.component.css',
})
export class FootballLeaguesComponent {
  selectedLeague: string = "";
  leagues: StandingsData[] = [];
  private standingsSubscription: Subscription = new Subscription();
  constructor(
    private footballService: FootballLeagueService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectedLeague = this.footballService.selectedLeague;
    const id = this.footballService.selectedLeagueID;
    if (this.selectedLeague) {
      this.getStandingsForFootballData(this.selectedLeague, id);
    }
  }

  getStandingsForFootballData(league: string, leagueId: number) {
    this.selectedLeague = league;

    this.standingsSubscription = this.footballService
      .getStandingsForFootballData(league, leagueId)
      .subscribe(
        (data: LeagueApiResponse) => {
          if (data && data.response && data.response.length > 0) {
            this.leagues = data.response[0].league.standings[0];
          } else {
            console.error('Invalid API response.');
          }
        },
        (error: any) => {
          console.error('Error while fetching...', error);
        }
      );
  }
  ngOnDestroy(): void {
    // Unsubscribe from the standingsSubscription to prevent memory leaks
    if (this.standingsSubscription) {
      this.standingsSubscription.unsubscribe();
    }
  }
}
