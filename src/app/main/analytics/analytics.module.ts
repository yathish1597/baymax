import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { AnalyticsRoutingModule } from './analytics-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConstcontactComponent } from './constcontact/constcontact.component';
import { LeadsourcesComponent } from './leadsources/leadsources.component';
import { CommonComponent } from './common/common.component'; 
import { RouterModule } from '@angular/router';
import { DigitalComponent } from './dashboard/digital/digital.component';
import { ConversationsComponent } from './dashboard/conversations/conversations.component';
import { PossibilitiesComponent } from './dashboard/possibilities/possibilities.component';
import { OpportunitiesComponent } from './dashboard/opportunities/opportunities.component';
import { ParallelprojectsComponent } from './dashboard/parallelprojects/parallelprojects.component';
import { PpmComponent } from './dashboard/ppm/ppm.component';
import { RepeatComponent } from './dashboard/repeat/repeat.component';
import { PriorityComponent } from './dashboard/priority/priority.component';
import { IpComponent } from './dashboard/ip/ip.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalyticsComponent } from './analytics.component';
import { CoreCommonModule } from '@core/common.module';
 
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

// import { DashboardComponentComponent } from './dashboard/dashboard-component/dashboard-component.component';

const routes =[
  // {
  //   path:'dashboard',
  //   component:DashboardComponent,
  //   data:{ breadcrumb:'paralell projects'}
  // },
  // {
  //   path:'',
  //   redirectTo:'/dashboard/parallelprojects',
  //   data:{ breadcrumb:''}
  // },
 
  {
    path:'',
    redirectTo:'dashboard'
    // children:[
    //   {
    //      path:'',
    //      redirectTo:'dashboard'
    //   },
      
      
    // ]
  },
  {
    path:'constcontact',
    component:ConstcontactComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'leadsources',
    component:LeadsourcesComponent,
    data:{ breadcrumb:''}
  },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data:{ breadcrumb:''}
    // children:[
    //   {
    //     path:'',
    //     redirectTo:'parallelprojects'
    //   },
      
    // ]
  },
]
@NgModule({
  declarations: [
    DashboardComponent,
    ConstcontactComponent,
    LeadsourcesComponent,
    CommonComponent,
    DigitalComponent,
    ConversationsComponent,
    PossibilitiesComponent,
    OpportunitiesComponent,
    ParallelprojectsComponent,
    PpmComponent,
    RepeatComponent,
    PriorityComponent,
    IpComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    // AnalyticsRoutingModule,
    RouterModule.forChild(routes),
    // DashboardModule
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    ChartsModule,
    ChartistModule,
    NgxPaginationModule,
    ContentHeaderModule,
    CoreCommonModule,
    // ParallelprojectsComponent

  ]
})
export class AnalyticsModule { }
