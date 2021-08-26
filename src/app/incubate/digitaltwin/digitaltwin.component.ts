import { Component, OnInit , ViewChild} from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  // colors: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};
export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};
export type ChartOptions3 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};
export type ChartOptions4 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};
export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  colors: string[];
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-digitaltwin',
  templateUrl: './digitaltwin.component.html',
  styleUrls: ['./digitaltwin.component.scss']
})
export class DigitaltwinComponent implements OnInit {
  public breadcrumbDefault: Breadcrumb;
  public card=1;
  public displayValue:number=1;
  public bdisplayValue:number=1;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions1>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions3: Partial<ChartOptions3>;
  public chartOptions4: Partial<ChartOptions4>;

  constructor() {
    this.chartOptions1 = {
      series: [
        {
          name: "Items",
          data: [20, 10, 35, 26, 50, 50, 60, 45, 65,65,80,90]
        }
      ],
      chart: {
        height: 400,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#8265FF"],
      stroke: {
        curve: "straight",
        width:[5]
      },
      title: {
        text: "",
        align: "center"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    };
    this.chartOptions = {
      series: [65],
      chart: {
        height: 300,
        type: "radialBar",
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              fontWeight:'bolder',
              color: 'gray',
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              fontWeight:'bolder',
              color: 'gray',
              // formatter: function(val) {
              //   return val + "%";
              // }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: ["IP Projects"]
    };
    this.chartOptions2 = {
      series: [75],
      chart: {
        height: 300,
        type: "radialBar",
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              fontWeight:'bolder',
              color: 'gray',
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              fontWeight:'bolder',
              color: 'gray',
              formatter: function(val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      colors: ["#FFFF00"],
      labels: ["DT Projects"]
    };
    this.chartOptions3 = {
      series: [47],
      chart: {
        height: 300,
        type: "radialBar",
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              fontWeight:'bolder',
              color:'gray',
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              fontWeight:'bolder',
              color:'gray',
              formatter: function(val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      colors: ["#FF0000"],
      labels: ["Product Development"]
    };
    this.chartOptions4 = {
      series: [25],
      chart: {
        height: 300,
        type: "radialBar",
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              fontWeight:'bolder',
              color: 'gray',
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              fontWeight:'bolder',
              color: 'gray',
              formatter: function(val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      colors: ["#FF0000"],
      labels: ["DT Projects"]
    };
   }

  ngOnInit(): void {
    this.breadcrumbDefault = {
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };
  }
  changeDisplayValue(value: number) {
    this.displayValue = value;
  }
  changeDisplayValuec(value: number) {
    this.card = value;
  }
  changebDisplayValue(value: number) {
    this.bdisplayValue = value;
  }
}
