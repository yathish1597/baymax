import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constcontact',
  templateUrl: './constcontact.component.html',
  styleUrls: ['./constcontact.component.scss']
})
export class ConstcontactComponent implements OnInit {
public contentHeader:object;
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
          // {
          //   name: 'Dashboard',
          //   isLink: false,
          //   link:'/'
          // },
          {
            name:'Constant Contact page',
            isLink:false,
            link:'/'
          }
        ]
      }
    }
  }
  }


