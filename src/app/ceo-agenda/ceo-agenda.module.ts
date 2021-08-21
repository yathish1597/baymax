import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeoAgendaRoutingModule } from './ceo-agenda-routing.module';
// import { CeoAgendaComponent } from './ceo-agenda.component';
import { ActionComponent } from './action/action.component';
import { PerspectiveComponent } from './perspective/perspective.component';
import { RadarComponent } from './radar/radar.component';
import { StructureComponent } from './structure/structure.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragulaModule } from 'ng2-dragula';
// import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { GaugeChartModule } from 'angular-gauge-chart';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { StructuresComponent } from './structures/structures.component';

@NgModule({
  declarations: [
    // CeoAgendaComponent,
    ActionComponent,
    PerspectiveComponent,
    RadarComponent,
    StructureComponent,
    StructuresComponent
  ],
  imports: [
    CommonModule,
    CeoAgendaRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    DragulaModule,
    // ConfirmationPopoverModule,
    GaugeChartModule,
    MatIconModule,
    MatCheckboxModule,
    NgbModule,
    NgModule,
    // CeoAgendaComponent,
    ActionComponent,
    PerspectiveComponent,
    RadarComponent,
    StructureComponent
  ]
})
export class CeoAgendaModule { }
