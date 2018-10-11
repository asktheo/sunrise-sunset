import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs';
import {SunServiceService} from './sun-service.service';
import {LocalSunRiseSunSet} from './sunrisesunset';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-sunrisesunset',
  templateUrl: './sunrisesunset.component.html',
  styleUrls: ['./sunrisesunset.component.css']
})

export class SunrisesunsetComponent implements OnInit {
  sundata: LocalSunRiseSunSet = null;
  lat = 55.5;
  lon = 11.1;
  title = 'Sunrise Sunset';

  constructor(private toastr: ToastrService, private sunService: SunServiceService) { }

  ngOnInit() {

  }

  getSun() {
    this.sunService.setParam('lat', this.lat.toString());
    this.sunService.setParam('lng', this.lon.toString());
    this.sunService.search().subscribe(data => {
      this.sundata = data.results;
      this.toastr.success('Response received', 'sunrise/sunset data loaded');
    },
      err => this.toastr.error(err.valueOf(), 'Response Error', {positionClass: 'toast-bottom-right' }));
  }

}
