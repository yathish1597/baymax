import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { eight, nine, generateData } from '../dashboard/chart-data-analytics';
@Component({
  selector: 'app-leadsources',
  templateUrl: './leadsources.component.html',
  styleUrls: ['./leadsources.component.scss']
})
export class LeadsourcesComponent implements OnInit{
  displayValue: number = 1;
  bottomDisplayValue: number = 1;

  public contentHeader: object ;

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
            name: 'Lead Sources Page',
            isLink: false,
            link:'/'
          },
        ]
      }
    }
  }

  // lineChart

  public lineChartData: Array<any> = [
    { data: [1, 2, 1.5, 1.1, 0.8, 2], label: 'AI' },
    { data: [0.8, 1.2, 1.4, 2, 0.5, 1.5], label: 'IM' },
    { data: [0.5, 1.6, 0.7, 1.5, 0.4, 0.8], label: 'IS' },
    { data: [2, 0.8, 0.2, 0.9, 0.8, 1.5], label: 'TM' },
    { data: [1.5, 1.8, 0.9, 1.7, 0.4, 1.2], label: 'ZT' }
  ];

  public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
  ];

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(54,190,166,.1)',
      borderColor: '#36bea6',
      pointBackgroundColor: '#36bea6',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#36bea6'
    },
    {
      // dark grey
      backgroundColor: 'rgb(41,98,255,.1)',
      borderColor: '#2962FF',
      pointBackgroundColor: '#2962FF',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2962FF'
    }
  ];

  public lineChartLegend = true;

  public lineChartType = 'line';

  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }



  totalProjects = [
    {month: 'June-21', code: 'AI', country: 'India', industry: 'Others', cpm: 1, p1: 1, p2: 1, p3: 1, p4: '-'},
    {month: 'April-21', code: 'IM', country: 'Australia', industry: 'Construction', cpm: 2, p1: '-', p2: '-', p3: 1, p4: '-'},
    {month: 'May-21', code: 'IS', country: 'Australia', industry: 'Mining', cpm: 1, p1: '-', p2: '-', p3: 1, p4: '-'},
    {month: 'July-21', code: 'IM', country: 'India', industry: 'Manufacturing', cpm: 2, p1: 1, p2: 1, p3: 1, p4: '-'},
    {month: 'June-21', code: 'AI', country: 'India', industry: 'Others', cpm: 1, p1: 1, p2: 1, p3: 1, p4: '-'},
    {month: 'April-21', code: 'IM', country: 'Australia', industry: 'Construction', cpm: 2, p1: '-', p2: '-', p3: 1, p4: '-'},
    {month: 'May-21', code: 'IS', country: 'Australia', industry: 'Mining', cpm: 1, p1: '-', p2: '-', p3: 1, p4: '-'},
    {month: 'July-21', code: 'IM', country: 'India', industry: 'Manufacturing', cpm: 2, p1: 1, p2: 1, p3: 1, p4: '-'},
    {month: 'June-21', code: 'AI', country: 'India', industry: 'Others', cpm: 1, p1: 1, p2: 1, p3: 1, p4: '-'},
    {month: 'April-21', code: 'IM', country: 'Australia', industry: 'Construction', cpm: 2, p1: '-', p2: '-', p3: 1, p4: '-'},
    {month: 'May-21', code: 'IS', country: 'Australia', industry: 'Mining', cpm: 1, p1: '-', p2: '-', p3: 1, p4: '-'},
    {month: 'july-21', code: 'IM', country: 'India', industry: 'Manufacturing', cpm: 2, p1: 1, p2: 1, p3: 1, p4: '-'},
    {month: 'June-21', code: 'AI', country: 'India', industry: 'Others', cpm: 1, p1: 1, p2: 1, p3: 1, p4: '-'},
    {month: 'April-21', code: 'IM', country: 'Australia', industry: 'Construction', cpm: 2, p1: '-', p2: '-', p3: 1, p4: '-'},
    {month: 'May-21', code: 'IS', country: 'Australia', industry: 'Mining', cpm: 1, p1: '-', p2: '-', p3: 1, p4: '-'},
    {month: 'July-21', code: 'IM', country: 'India', industry: 'Manufacturing', cpm: 2, p1: 1, p2: 1, p3: 1, p4: '-'},
  ];



  eight: any[]=[];
  nine: any[]=[];

  multi: any[]=[];
  dateData: any[];
  dateDataWithRange: any[];


  range = false;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = 'Partner';
  showYAxisLabel = true;
  yAxisLabel = 'Percentage';
  showGridLines = true;
  innerPadding = 0;
  autoScale = true;
  timeline = false;
  barPadding = 0;
  groupPadding = 0;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  view = '';
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;
  rangeFillOpacity = 0.15;

  colorScheme = {
    domain: ['#4fc3f7', '#fb8c00', '#7460ee', '#f62d51', '#20c997', '#2962FF']
  };
  schemeType = 'ordinal';


  constructor() {
    Object.assign(this, {
      eight, nine
    });
    this.dateData = generateData(6, false);
    this.dateDataWithRange = generateData(2, true);
  }
  get dateDataWithOrWithoutRange() {
    if (this.range) {
      return this.dateDataWithRange;
    } else {
      return this.dateData;
    }
  }

  // line interpolation
  curve = shape.curveLinear;

  select(data:string) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry:string) {
    console.log('Legend clicked', entry);
  }


  changeDisplayValue(value: number) {
    this.displayValue = value;
  }
  changeBottomDisplayValue(value: number) {
    this.bottomDisplayValue = value;
  }
}
