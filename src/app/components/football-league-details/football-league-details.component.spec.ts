import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballLeagueDetailsComponent } from './football-league-details.component';

describe('FootballLeagueDetailsComponent', () => {
  let component: FootballLeagueDetailsComponent;
  let fixture: ComponentFixture<FootballLeagueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballLeagueDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootballLeagueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
