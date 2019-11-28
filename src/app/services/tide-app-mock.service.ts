import { Injectable, EventEmitter, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { UserProfile, TideEvent } from '../common/app.models';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TideAppMockService {

  constructor(
    private http: HttpClient
  ) { }

  fetchUserProfile(): Observable<UserProfile> {

    const requestUrl = 'api/security/userprofile';
    console.log('Retrieving UserProfile for TIDE portal');

    const profile = new UserProfile();

    return this.http.post<UserProfile>(requestUrl, {});
  }

  getTideEvents(): Observable<TideEvent[]> {
    const events = [];

    events.push(new TideEvent(
      'Hackathon Event 01',
      'Hackathon Event 01',
      'Hackathon',
      '16-18',
      'August',
      '2019',
      true,
      ['#hackathon', '#hackathon2019'],
      ['10 Teams enrolled'],
      []
    ));


    events.push(new TideEvent(
      'Vedika Event 01',
      'Vedika Event 01',
      'Vedika',
      '20',
      'August',
      '2019',
      true,
      ['#vedika', '#vedika2019'],
      ['20 participants'],
      []
    ));

    events.push(new TideEvent(
      'Patent Rally 01',
      'Patent Rally 01',
      'Patent',
      '27-29',
      'August',
      '2019',
      true,
      ['#patent', '#patent2019'],
      ['33 Inventions submitted'],
      ['8 Inventions authorized']
    ));

    events.push(new TideEvent(
      'Hackathon Event 02',
      'Hackathon Event 02',
      'Hackathon',
      '16-18',
      'Sept',
      '2019',
      false,
      ['#hackathon', '#hackathon2019'],
      ['5 Teams enrolled'],
      []
    ));

    events.push(new TideEvent(
      'Vedika Event 02',
      'Vedika Event 02',
      'Vedika',
      '20',
      'September',
      '2019',
      false,
      ['#vedika', '#vedika2019'],
      ['23 participants'],
      []
    ));

    events.push(new TideEvent(
      'Patent Rally 02',
      'Patent Rally 02',
      'Patent',
      '27-29',
      'September',
      '2019',
      false,
      ['#patent', '#patent2019'],
      [],
      ['23 Inventions submitted']
    ));

    return of(events);
  }

}
