import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { ConstcontactComponent } from './constcontact/constcontact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsourcesComponent } from './leadsources/leadsources.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AuthGuard } from 'app/auth/helpers';
import { Role } from 'app/auth/models';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { CoreCommonModule } from '@core/common.module';
import { DashboardService } from './dashboard.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreSidebarModule } from '@core/components';

const routes=[

{
  path:'',
  redirectTo:'dashboard'
},
{
  path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data:{ breadcrumb:''}
},
{
  path:'constcontact',
  component:ConstcontactComponent
},
{
  path:'leadsources',
  component:LeadsourcesComponent
}
]

@NgModule({
  declarations: [
    AnalyticsComponent,
    ConstcontactComponent,
    DashboardComponent,
    LeadsourcesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgbModule,
    PerfectScrollbarModule,
    CoreCommonModule,
    NgApexchartsModule,
    NgxDatatableModule,
    Ng2FlatpickrModule,
    CoreDirectivesModule,
    CorePipesModule,
    CoreSidebarModule,
    NgSelectModule
    // BrowserModule
  ],
  providers:[DashboardService]
})
export class AnalyticsModule { }
