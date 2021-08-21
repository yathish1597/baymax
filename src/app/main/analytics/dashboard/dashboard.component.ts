import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public contentHeader: object ;

  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Analytics',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          // {
          //   name: 'Analytics',
          //   isLink: true,
          //   link: '/'
          // },
          {
            name: 'Dashboard',
            isLink: false,
            link:'/'
          },
          {
            name:'Parallel-Projects page',
            isLink:false,
            link:'/'
          }
        ]
      }
    }
  }

}
