import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallelprojectsComponent } from './parallelprojects/parallelprojects.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AuthGuard } from 'app/auth/helpers';
import { Role } from 'app/auth/models';

import { CoreCommonModule } from '@core/common.module';
import { DashboardService } from '../dashboard.service';
import { DigitalComponent } from './digital/digital.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { PossibilitiesComponent } from './possibilities/possibilities.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { PpmComponent } from './ppm/ppm.component';
import { RepeatComponent } from './repeat/repeat.component';
import { PriorityComponent } from './priority/priority.component';
import { IpComponent } from './ip/ip.component';
const routes=[ 

{
  path:'',
  redirectTo:'parallelprojects',
  pathmatch:'full'
},
{
  path:'parallelprojects',
  component:ParallelprojectsComponent
},
{
  path:'digital',
  component:DigitalComponent
},
{
  path:'conversations',
  component:ConversationsComponent
},
{
  path:'possibilites',
  component:PossibilitiesComponent
},
{
  path:'opportunities',
  component:OpportunitiesComponent
},
{
  path:'ppm',
  component:PpmComponent
},
{
  path:'repeat',
  component:RepeatComponent
},
{
  path:'priority',
  component:PriorityComponent
},
{
  path:'ip',
  component:IpComponent
}
]
@NgModule({
  declarations: [
    ParallelprojectsComponent,
    DigitalComponent,
    ConversationsComponent,
    PossibilitiesComponent,
    OpportunitiesComponent,
    PpmComponent,
    RepeatComponent,
    PriorityComponent,
    IpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgbModule,
    PerfectScrollbarModule,
    CoreCommonModule,
    NgApexchartsModule,
  ],
  providers:[],
  // bootstrap: [ParallelprojectsComponent]
})
export class DashboardModule { }
