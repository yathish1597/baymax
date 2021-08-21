import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DashboardComponent } from './dashboard.component';
// import { ConstcontactComponent } from './constcontact/constcontact.component';
// import { LeadsourcesComponent } from './leadsources/leadsources.component';
import { CommonComponent } from '../common/common.component';
import { RouterModule } from '@angular/router';
import { DigitalComponent } from './digital/digital.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { PossibilitiesComponent } from './possibilities/possibilities.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ParallelprojectsComponent } from './parallelprojects/parallelprojects.component';
import { PpmComponent } from './ppm/ppm.component';
import { RepeatComponent } from './repeat/repeat.component';
import { PriorityComponent } from './priority/priority.component';
import { IpComponent } from './ip/ip.component';

const routes=[

{
  path:'',
  redirectTo:'parallelprojects',
  pathMatch:'full'
},
  {
    path:'digital',
    component:DigitalComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'conversations',
    component:ConversationsComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'possibilites', 
    component:PossibilitiesComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'opportunities',
    component:OpportunitiesComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'parallelprojects',
    component:ParallelprojectsComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'ppm',
    component:PpmComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'repeat',
    component:RepeatComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'priority',
    component:PriorityComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'ip',
    component:IpComponent,
    data:{ breadcrumb:''}
  },

]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class DashboardModule { }
