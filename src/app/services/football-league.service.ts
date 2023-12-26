import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FixtureApiResponse } from '../models/football-fixture.model';
import { LeagueApiResponse } from '../models/football-league';

@Injectable({
  providedIn: 'root',
})
export class FootballLeagueService {
  private API = 'https://v3.football.api-sports.io';
  private readonly currentYear: number = new Date().getFullYear(); // Get the current year

  // private readonly leagueId = {
  //   england: 39,
  //   spain: 140,
  //   germany: 78,
  //   itlay: 135,
  //   france: 61,
  // };

  selectedLeague: string = '';
  selectedLeagueID: number = 0;

  constructor(private http: HttpClient) {}

  getStandingsForFootballData(
    league: string,
    leagueId: number,
    season: string = this.currentYear.toString()
  ): Observable<LeagueApiResponse> {
    this.selectedLeague = league;
    this.selectedLeagueID = leagueId;

    return this.http
      .get<LeagueApiResponse>(
        `${this.API}/standings?league=${leagueId}&season=${season}`
      )
      .pipe(
        map((response: LeagueApiResponse) => {
          return response;
        })
      );
  }

  /*********Get team data************ */

  getTeamScoresTop10(
    teamId: number,
    season: string = this.currentYear.toString()
  ): Observable<FixtureApiResponse> {
    return this.http.get(
      `${this.API}/fixtures?team=${teamId}&season=${season}&last=10`
    ) as Observable<any>;
  }
}
