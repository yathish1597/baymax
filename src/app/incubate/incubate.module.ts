import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule, DragDropRegistry } from '@angular/cdk/drag-drop';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { ArchivesComponent } from './leads/archives/archives.component';
import { ConversationsComponent } from './leads/conversations/conversations.component';
import { KanbanComponent } from './leads/kanban/kanban.component';
import { ListLeadsComponent } from './leads/list-leads/list-leads.component';
import { OpportunitesComponent } from './leads/opportunites/opportunites.component';
import { OpportunitiesListComponent } from './leads/opportunities-list/opportunities-list.component';
import { PossibilitiesComponent } from './leads/possibilities/possibilities.component';
import { PossibilitiesListComponent } from './leads/possibilities-list/possibilities-list.component';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DndModule } from 'ngx-drag-drop'; 
import flatpickr from 'flatpickr';
import { DragDrop } from '@angular/cdk/drag-drop';
import {Dragula} from 'dragula';
import { BreadcrumbModule } from 'app/layout/components/content-header/breadcrumb/breadcrumb.module';
// import { NgSelectModule } from '@ng-select/ng-select';
import {MatStepperModule} from '@angular/material/stepper';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FeatherIconDirective } from '@core/directives/core-feather-icons/core-feather-icons';
import { Structure1Component } from './structure1/structure1.component';
import { SetupComponent } from './setup/setup.component';
import { ActionComponent } from './action/action.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AllocationComponent } from './allocation/allocation.component';
import { DigitaltwinComponent } from './digitaltwin/digitaltwin.component';
import { KpiComponent } from './kpi/kpi.component';
const routes=[
  {
    path: '', 
    redirectTo: 'conversations',
    pathMatch: 'full'
  },
  {
    path:'conversations',
    component:ConversationsComponent
  },
  {
    path:'possibilities',
    component:PossibilitiesComponent
  },
  {
    path:'opportunities',
    component:OpportunitesComponent
  },
  {
    path:'archives',
    component:ArchivesComponent
  },
  {
    path:'kanban',
    component:KanbanComponent
  },
  

]

@NgModule({
  declarations: [
    ArchivesComponent,
    ConversationsComponent,
    KanbanComponent,
    ListLeadsComponent,
    OpportunitesComponent,
    OpportunitiesListComponent,
    PossibilitiesComponent,
    PossibilitiesListComponent,
    Structure1Component,
    SetupComponent,
    ActionComponent,
    AllocationComponent,
    DigitaltwinComponent,
    KpiComponent,
  ],
  imports: [
    CommonModule,
    // BreadcrumbModule,
    // NgSelectModule,
    MatStepperModule,
    // FeatherIconDirective,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    //  DatePipe, DecimalPipe,
    NgbModalModule,
    DndModule,
NgbTooltipModule,
DragDropModule,
PerfectScrollbarModule,
NgMultiSelectDropDownModule,
// DragDrop,
FlatpickrModule,
ContentHeaderModule,
NgApexchartsModule,
// DragDrop,
DragDropModule,
// DragEvent,
// DragDropRegistry
  ]
})
export class IncubateModule { }
