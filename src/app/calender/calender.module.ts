import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DndModule } from 'ngx-drag-drop';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ContentHeaderComponent } from 'app/layout/components/content-header/content-header.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { CalenderComponent } from './calender.component';
import { RouterModule } from '@angular/router';

const routes=[
  // {
  //   path:'',
  //   redirectTo:''
  // },
  {
    path:'',
    component:MeetingsComponent
  },
  {
   path:'calender',
     component:CalenderComponent
  }
]

@NgModule({
  declarations: [
    MeetingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),  
    // ContentHeaderComponent
    FormsModule,
    ReactiveFormsModule,
    DndModule,
    NgbModule,
    NgbModalModule,
    NgMultiSelectDropDownModule,
    NgbTooltipModule,
    CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
    }),
    QuillModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger', // set defaults here
      }),
    PerfectScrollbarModule,
    DragDropModule,
    FlatpickrModule.forRoot(),
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  providers:[DatePipe,DecimalPipe]
})
export class CalenderModule { }
