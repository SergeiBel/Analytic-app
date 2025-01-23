import {Component, OnInit} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {BundesligaRestService} from '../../services/bundesliga-rest.service';
import {Group} from '../../models/group';
import {NgForOf} from '@angular/common';
import {TourInfoComponent} from '../tour-info/tour-info.component';

@Component({
  selector: 'app-tours-tab',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanelDescription,
    NgForOf,
    TourInfoComponent
  ],
  templateUrl: './tours-tab.component.html',
  styleUrl: './tours-tab.component.scss'
})
export class ToursTabComponent implements OnInit {
  public tours: Group[] = [];
  public currentTour: Group = {} as Group; // todo: fix

  constructor(private readonly bundesligaRestService: BundesligaRestService) {}

  ngOnInit() {
    this.bundesligaRestService.getCurrentTour().subscribe(tour => { // todo: change to switchMap
      this.currentTour = tour;
      this.bundesligaRestService.getTours().subscribe((data: Group[]) => {
        this.tours = data.slice(0, tour.groupOrderID)
      })
    })
  }
}
