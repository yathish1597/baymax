import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
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
            name:'Parallel-Projects',
            isLink:false,
            link:'/'
          }
        ]
      }
    }
  }

}
