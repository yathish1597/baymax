import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast
// import { DataTablesModule } from 'angular-datatables';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '@fake_db/fake-db.service';

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { coreConfig } from 'app/app-config';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
// import { CalenderComponent } from './calender/calender.component';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { GaugeChartModule } from 'angular-gauge-chart';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalenderComponent } from './calender/calender.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PerspectiveComponent } from './ceo-agenda/perspective/perspective.component';
import { AuthGuard } from './login/login/guard';
import { ContentHeaderComponent } from './layout/components/content-header/content-header.component';
import { ContentHeaderModule } from './layout/components/content-header/content-header.module';
import { RadarComponent } from './ceo-agenda/radar/radar.component';
import { ActionComponent } from './ceo-agenda/action/action.component';
// import { CalenderComponent } from './calender/calender.component';
const appRoutes: Routes = [
  {
    path: 'pages',   
    //  canActivate:[AuthGuard],
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'analytics', 
    // canActivate:[AuthGuard],
    loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
  },
  {
    path: 'leads',    
    // canActivate:[AuthGuard],
    loadChildren: () => import('./incubate/incubate.module').then(m => m.IncubateModule)
  },
  {
    path: 'ceo-agenda',  
      // canActivate:[AuthGuard],
    loadChildren: () => import('./ceo-agenda/ceo-agenda-routing.module').then(m => m.CeoAgendaRoutingModule)
  },
  {
    path: 'portfolio',  
      // canActivate:[AuthGuard],
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(m=> m.AdminModule)
  },
  // { path: 'calender', component: CalenderComponent
  // data: {title: 'Analytics',
  // urls: [{ title: 'Calendar', url: '/calendar' }] }
  // },
// {
//   path:'calender',   
//    canActivate:[AuthGuard],
//   component:CalenderComponent
// },
{
  path:'meetings',
  loadChildren: () => import('./calender/calender.module').then(m => m.CalenderModule)
},
  {
    path: 'home',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  declarations: [AppComponent, CalenderComponent, PerspectiveComponent,RadarComponent,ActionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GaugeChartModule,
    CommonModule,
    FlatpickrModule.forRoot(),
    NgbModalModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    // ContentHeaderComponent,
    ContentHeaderModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),
    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),
    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    // App modules
    LayoutModule,
    SampleModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
exports:[CalenderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
