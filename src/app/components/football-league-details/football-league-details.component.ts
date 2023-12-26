import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballLeagueService } from '../../services/football-league.service';
import {
  Fixture,
  FixtureApiResponse,
} from '../../models/football-fixture.model';

@Component({
  selector: 'app-football-league-details',
  templateUrl: './football-league-details.component.html',
  styleUrl: './football-league-details.component.css',
})
export class FootballLeagueDetailsComponent {
  teamNumber: number = 0;
  selectedLeague: string = '';
  fixtures: Fixture[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private footballService: FootballLeagueService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamNumber = +params['teamNumber'];     
      this.getTeamScores(this.teamNumber);
    });
  }

  getTeamScores(teamId: number) {
    this.footballService
      .getTeamScoresTop10(teamId)
      .subscribe((data: FixtureApiResponse) => {
        this.fixtures = data.response;
        this.selectedLeague = this.fixtures[0].league.country.toLowerCase();
      });
  }

  goToLeagueSelection(): void {
    this.router.navigate(['/football-teams']);
  }
}
