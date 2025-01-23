import {Component, OnInit} from '@angular/core';
import {BundesligaRestService} from '../../services/bundesliga-rest.service';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {TeamTableInfo} from '../../models/team-table-info';

@Component({
  selector: 'app-tournament-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './tournament-table.component.html',
  styleUrl: './tournament-table.component.scss'
})
export class TournamentTableComponent implements OnInit {
  public tableData: TeamTableInfo[] = [];
  public readonly displayedColumns = ['teamIconUrl', 'teamName', 'points', 'goalDiff', 'goals', 'opponentGoals', 'won', 'draw', 'lost'];

  constructor(private readonly bundesligaRestService: BundesligaRestService) {}

  ngOnInit() {
    this.bundesligaRestService.getTable().subscribe((data: TeamTableInfo[]) => {
      this.tableData = data;
    })
  }
}
