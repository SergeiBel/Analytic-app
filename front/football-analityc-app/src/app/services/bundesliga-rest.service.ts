import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Match} from "../models/match";
import {Group} from "../models/group";

@Injectable({
  providedIn: 'root'
})
export class BundesligaRestService {

  private readonly baseUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) {
  }

  public getTable(): Observable<any[]> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/leagueTable`)
  }

  public getGoalGetters(): Observable<any[]> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/goalGetters`)
  }

  public getMatchData(): Observable<any[]> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/matchData`)
  }
  public getTours(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.baseUrl}/getTours`)
  }

  public getMatchesFromTour(tourId: number): Observable<Match[]> {
    return this.httpClient.get<Match[]>(`${this.baseUrl}/getMatchesByTour/${tourId}`)
  }
}
