import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe  } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { BacklogComponent } from './backlog/backlog.component';
import { KanbanComponent } from './kanban/kanban.component';
import { RouterModule } from '@angular/router';
import { NgbModalModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService} from './user.service'
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { Backlog1Component } from './backlog1/backlog1.component';
import { ParallelprojectsComponent } from './parallelprojects/parallelprojects.component';
import { PossibilitiesComponent } from './possibilities/possibilities.component';
import { ExceptionsComponent } from './exceptions/exceptions.component';

const routes=[
  {
    path:'users',
  component:UsersComponent
  },
  {
    path:'prospects',
component:KanbanComponent
  },
  {
    path:'backlog',
    component:BacklogComponent
  },
  {
    path:'backlog1',
    component:Backlog1Component
  },
  {
    path:'exceptions',
    component:ExceptionsComponent
  },
  {
    path:'parallel-projects',
    component:ParallelprojectsComponent
  },
  {
    path:'possibilities',
    component:PossibilitiesComponent
  }

]

@NgModule({
  declarations: [
    UsersComponent,
    BacklogComponent,
    KanbanComponent,
    Backlog1Component,
    ParallelprojectsComponent,
    PossibilitiesComponent,
    ExceptionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    NgbModalModule, NgbModule, NgbTooltipModule,
    FormsModule, ReactiveFormsModule,
    // DatePipe, DecimalPipe,
    HttpClientModule,
    NgMultiSelectDropDownModule ,
    DragDropModule
  ],
  providers:[UserService]
})
export class AdminModule { }
