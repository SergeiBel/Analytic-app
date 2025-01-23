import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BundesligaRestService} from '../../services/bundesliga-rest.service';
import {NgForOf} from '@angular/common';
import {MatchInfoComponent} from '../match-info/match-info.component';
import {Match} from '../../models/match';
import {Group} from '../../models/group';

@Component({
  selector: 'app-tour-info',
  standalone: true,
  imports: [
    NgForOf,
    MatchInfoComponent
  ],
  templateUrl: './tour-info.component.html',
  styleUrl: './tour-info.component.scss'
})
export class TourInfoComponent implements OnChanges {
  @Input() tour: Group = {} as Group; // todo: fix

  public matches: Match[] = []

  constructor(private readonly bundesligaRestService: BundesligaRestService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.bundesligaRestService.getMatchesFromTour(this.tour?.groupOrderID).subscribe((matches: Match[]) => {
      this.matches = matches;
    })
  }


}
