import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Match} from "../../models/match";

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.scss'
})
export class MatchInfoComponent implements OnChanges {
  @Input() match: Match = {} as Match; // todo : fix type

  ngOnChanges(changes: SimpleChanges) {
  }

}
