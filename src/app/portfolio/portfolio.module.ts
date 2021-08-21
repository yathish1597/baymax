import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { ProjectsComponent } from './projects/projects.component';
import { PrototypesComponent } from './prototypes/prototypes.component';
import { SnapshotsComponent } from './snapshots/snapshots.component';
import { UpdateDocumentComponent } from './document/update-document/update-document.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';
import { UpdatePrototypesComponent } from './prototypes/update-prototypes/update-prototypes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { SnapshotsService } from './snapshots/snapshots.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


const routes=[
  {
    path:'',
    redirectTo:'snapshots',
  pathmatch:'full'
   },
{
  path:'snapshots',
  component: SnapshotsComponent,
  data:{ breadcrumb:''}
},
{
  path:'projects',
  component: ProjectsComponent,
  data:{ breadcrumb:''}
},
{
  path:'prototypes',
  component: PrototypesComponent,
  data:{ breadcrumb:''}
},
{
  path:'documents',
  component: DocumentComponent,
  data:{ breadcrumb:''}
}
]

@NgModule({
  declarations: [
    DocumentComponent,
    ProjectsComponent,
    PrototypesComponent,
    UpdateDocumentComponent,
    SnapshotsComponent,
    UpdateProjectComponent,
    UpdatePrototypesComponent
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule ,
    RouterModule.forChild(routes),
    ContentHeaderModule,
    NgApexchartsModule,
    NgbModule,
    CoreCommonModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    // ConfirmationPopoverModule
    // SnapshotsComponent 
  ],
  providers:[SnapshotsService]
})
export class PortfolioModule { }
