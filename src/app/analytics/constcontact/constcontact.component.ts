import { Component, OnInit, ViewEncapsulation, ViewChild  } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';

import { colors } from 'app/colors.const';
import { User } from 'app/auth/models';
import { UserService } from 'app/auth/service';
import { DashboardService } from 'app/analytics/dashboard.service';
@Component({
  selector: 'app-constcontact',
  templateUrl: './constcontact.component.html',
  styleUrls: ['./constcontact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConstcontactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
