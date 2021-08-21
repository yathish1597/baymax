import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ActionComponent } from './action/action.component';
import { PerspectiveComponent } from './perspective/perspective.component';
import { RadarComponent } from './radar/radar.component';
import { StructureComponent } from './structure/structure.component';
import { StructuresComponent } from './structures/structures.component';
import { Structure1Component } from 'app/incubate/structure1/structure1.component';
import { SetupComponent } from 'app/incubate/setup/setup.component';
import { ActionComponent } from 'app/incubate/action/action.component';
import { AllocationComponent } from 'app/incubate/allocation/allocation.component';
import { DigitaltwinComponent } from 'app/incubate/digitaltwin/digitaltwin.component';
import { KpiComponent } from 'app/incubate/kpi/kpi.component';
const routes: Routes = [{
  path: '',
  children: [
 
    {
      path: 'structure',
      component: Structure1Component,
      data: {
        title: 'CEO Agenda',
        urls: [
          { title: 'CEO Agenda', url: '/ceo-agenda/structure' },
          { title: 'Structure Page' }
        ]
      }
    },
    {
      path:'setup',
      component:SetupComponent
    },
    {
      path: 'perspective',
      component: AllocationComponent,
      data: {
        title: 'CEO Agenda',
        urls: [
          { title: 'CEO Agenda', url: '/ceo-agenda/perspective' },
          { title: 'Perspective Page' }
        ]
      }
    },
    {
      path: 'radar',
      component: RadarComponent,
      data: {
        title: 'CEO Agenda',
        urls: [
          { title: 'CEO Agenda', url: '/ceo-agenda/radar' },
          { title: 'Radar Page' }
        ]
      }
    },
    {
      path: 'action',
      component: ActionComponent,
      data: {
        title: 'CEO Agenda',
        urls: [
          { title: 'CEO Agenda', url: '/ceo-agenda/action' },
          { title: 'Action Page' }
        ]
      } 
    },
    {
      path: 'digitaltwin',
      component: DigitaltwinComponent,
      data: {
        title: 'CEO Agenda',
        urls: [
          { title: 'CEO Agenda', url: '/ceo-agenda/digitaltwin' },
          { title: 'Action Page' }
        ]
      } 
    },
    {
      path: 'kpimetrics',
      component: KpiComponent,
      data: {
        title: 'CEO Agenda',
        urls: [
          { title: 'CEO Agenda', url: '/ceo-agenda/kpimetrics' },
          { title: 'Action Page' }
        ]
      } 
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes),
  CommonModule],
  exports: [RouterModule]
})
export class CeoAgendaRoutingModule { }
