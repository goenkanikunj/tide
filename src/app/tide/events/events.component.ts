import { Component, OnInit } from '@angular/core';

import { TideEvent } from './../../common/app.models';
import { TideAppService } from '../../services/tide-app.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  tideEvents: TideEvent[];

  constructor(
    private tideAppService: TideAppService
  ) {


  }

  ngOnInit() {
    this.tideAppService
      .getTideEvents()
      .subscribe(response => {
        this.tideEvents = response;
      });
  }
}
