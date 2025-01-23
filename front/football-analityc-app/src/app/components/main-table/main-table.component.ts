import {Component, OnInit} from '@angular/core';
import {BundesligaRestService} from '../../services/bundesliga-rest.service';
import {AsyncPipe, NgForOf} from '@angular/common';
import {TourInfoComponent} from '../tour-info/tour-info.component';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {TournamentTableComponent} from '../tournament-table/tournament-table.component';
import {ToursTabComponent} from '../tours-tab/tours-tab.component';

@Component({
  selector: 'app-main-table',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    TourInfoComponent,
    MatTabGroup,
    MatTab,
    TournamentTableComponent,
    ToursTabComponent
  ],
  templateUrl: './main-table.component.html',
  styleUrl: './main-table.component.scss',
})
export class MainTableComponent implements OnInit {
  public goalGetters: Array<any> = [];

  constructor(private readonly bundesligaRestService: BundesligaRestService) {}

  ngOnInit() {
    this.bundesligaRestService.getGoalGetters().subscribe((data: Array<any>) => {
      this.goalGetters = data.slice(0, 20);
    })
  }
}
