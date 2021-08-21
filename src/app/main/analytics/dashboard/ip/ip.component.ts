import { Component, OnInit } from '@angular/core';
import { colors } from 'app/colors.const';
import * as shape from 'd3-shape';
import { one, two, three, four, five, six, multi, seven, generateData } from '../chart-data-analytics';
@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss'] 
})
export class IpComponent implements OnInit {
  public contentHeader:object;

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
            name:'Ip page',
            isLink:false,
            link:'/'
          }
        ]
      }
    }
  }

  one: any[]=[]; 
  two: any[]=[];
  three: any[]=[];
  four: any[]=[];
  five: any[]=[];
  six: any[]=[];

  seven: any[]=[];

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
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  showGridLines = true;
  innerPadding = 0;
  autoScale = true;
  timeline = false;
  barPadding = 8;
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
      one, two, three, four, five, six, seven,
      multi
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
}
