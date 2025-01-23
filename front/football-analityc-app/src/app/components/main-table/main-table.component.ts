import {Component, OnInit} from '@angular/core';
import {BundesligaRestService} from '../../services/bundesliga-rest.service';
import {AsyncPipe, NgForOf} from '@angular/common';
import {TourInfoComponent} from '../tour-info/tour-info.component';
import {Group} from '../../models/group';

@Component({
  selector: 'app-main-table',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    TourInfoComponent
  ],
  templateUrl: './main-table.component.html',
  styleUrl: './main-table.component.scss',
})
export class MainTableComponent implements OnInit {
  // @ts-ignore
  public data;

  public goalGetters: Array<any> = [];
  public tours: Group[] = [];
  constructor(private readonly bundesligaRestService: BundesligaRestService) {}

  ngOnInit() {
    this.bundesligaRestService.getTable().subscribe((data: Array<any>) => {
      this.data = data;
    })

    this.bundesligaRestService.getGoalGetters().subscribe((data: Array<any>) => {
      this.goalGetters = data.slice(0, 20);
    })

    this.bundesligaRestService.getTours().subscribe((data: Group[]) => {
      this.tours = data.slice(0,2)
    })
  }
}
