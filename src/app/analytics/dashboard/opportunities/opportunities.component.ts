import { Component, OnInit , ViewChild} from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions10 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

declare global {
  interface Window {
    Apex: any;
  }
}

export interface DeviceSalesChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legends: ApexLegend;
  labels: any;
  name: any;
  tooltip: ApexTooltip;
  colors: string[];
  plotOptions: ApexPlotOptions
}
export interface DeviceSalesChartOptions1 {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legends: ApexLegend;
  labels: any;
  name: any;
  tooltip: ApexTooltip;
  colors: string[];
  plotOptions: ApexPlotOptions
}
export interface DeviceSalesChartOptions2 {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legends: ApexLegend;
  labels: any;
  name: any;
  tooltip: ApexTooltip;
  colors: string[];
  plotOptions: ApexPlotOptions
}

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type ChartOptions3 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type ChartOptions4 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type ChartOptions5 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};export type ChartOptions6 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartAreaSparkline3Options: Partial<ChartOptions10>;
  public chartOptions10: Partial<ChartOptions10>;

  public chartOptions1: Partial<ChartOptions1>;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions3: Partial<ChartOptions3>;
  public chartOptions4: Partial<ChartOptions4>;
  public chartOptions5: Partial<ChartOptions5>;
  public chartOptions6: Partial<ChartOptions6>;
  public DeviceSalesChartOptions: Partial<DeviceSalesChartOptions>;
  public DeviceSalesChartOptions1: Partial<DeviceSalesChartOptions1>;

  public DeviceSalesChartOptions2: Partial<DeviceSalesChartOptions2>;
  public commonAreaSparlineOptions: Partial<ChartOptions10> = {
    chart: {
      type: "area",
      height: 75,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: "smooth"
    },
    fill: {
      opacity: 0.3
    },
    yaxis: {
      min: 0
    }
  };



  constructor() {
    
    window.Apex = {
      stroke: {
        width: 3
      },
      markers: {
        size: 0
      },
      // tooltip: {
      //   fixed: {
      //     enabled: false
      //   }
      // }
    };
    this.chartAreaSparkline3Options = {
      series: [
        {
          name: "chart-big-sparkline",
          // data: this.randomizeArray(sparkLineData)
          data:[10,35,25,45,37,60]
        }
      ],
      title: {
        text: "92.6k",
        offsetX: 0,
        style: {
          fontSize: "20px",
          fontWeight:600,
          fontFamily:'system-ui'
        }
      },
      
      colors:["#FFA500"],
      subtitle: {
        text: "Subscribers Gained",
        offsetX: 0,
        style: {
          fontSize: "14px"
        }
      }
    };


    this.DeviceSalesChartOptions = {
      series: [5, 11, 4
        // , 3, 4
      ],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        type: 'donut',
        height: 200
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75px',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '18px',
                color: undefined,
                offsetY: 10
              },
              value: {
                show: false,
                color: '#99abb4',
              },
              total: {
                show: true,
                label: 'Industry',
                color: '#99abb4',
              }
            }
          }
        }
      },
      
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0
      },
      legends: {
        show: false,
      },
      labels: ['AI', 'IS', 'TM'
      //  ,'TM', 'ZT'
      ],
      colors: [
       // 'rgb(79, 195, 247)'
       'rgb(0, 255, 149)'
       // , 'rgb(251, 140, 0)'
       , 'rgb(0, 174, 255)'
       , 'rgb(255, 238, 0)'
       // , 'rgb(32, 201, 151)'
    ],
    };
    this.DeviceSalesChartOptions1 = {
      series: [ 3,5, 11
        // , 3, 4
      ],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        type: 'donut',
        height: 200
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75px',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '18px',
                color: undefined,
                offsetY: 10
              },
              value: {
                show: false,
                color: '#99abb4',
              },
              total: {
                show: true,
                label: 'Country',
                color: '#99abb4',
              }
            }
          }
        }
      },
      
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0
      },
      legends: {
        show: false,
      },
      labels: ['India', 'USA', 'Australia'
      //  ,'TM', 'ZT'
      ],
      colors: [
        // 'rgb(79, 195, 247)'
        'rgb(0, 255, 149)'
      // , 'rgb(251, 140, 0)'
      , 'rgb(0, 174, 255)'
      , 'rgb(255, 238, 0)'
      // , 'rgb(32, 201, 151)'
    ],
    };
    this.DeviceSalesChartOptions2 = {
      series: [5, 11, 4
        // , 3, 4
      ],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        type: 'donut',
        height: 200
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75px',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '18px',
                color: undefined,
                offsetY: 10
              },
              value: {
                show: false,
                color: '#99abb4',
              },
              total: {
                show: true,
                label: 'Solutions',
                color: '#99abb4',
              }
            }
          }
        }
      },
     
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0
      },
      legends: {
        show: false,
      },
      labels: ['Others', 'Transport', 'Document'
      //  ,'TM', 'ZT'
      ],
      colors: ['rgb(0, 174, 255)'

      // , 'rgb(251, 140, 0)'
      , 'rgb(255, 238, 0)'
      ,'rgb(0, 255, 149)'
      // , 'rgb(32, 201, 151)'
    ],
    };
 

    this.chartOptions = {
      series: [44, 55, 13],
      chart: {
        type: "donut"
      },
      labels: ["India", "Australia", "USA"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.chartOptions2 = {
      series: [44, 55, 13],
      chart: {
        type: "donut"
      },
      labels: ["India", "Australia", "USA"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.chartOptions3 = {
      series: [45, 55],
      chart: {
        type: "donut"
      },
      labels: ["Project Management", "Field Automation"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.chartOptions4 = {
      series: [30, 55,15],
      chart: {
        type: "donut"
      },
      labels: ["low", "high","medium"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.chartOptions5 = {
      series: [33, 33,34],
      chart: {
        type: "donut"
      },
      labels: ["Large", "Small","Emerging"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.chartOptions6 = {
      series: [20, 40,40],
      chart: {
        type: "donut"
      },
      labels: ["Tech manos", "Intro Meeting","Inside"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Likes",
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: 7,
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001"
        ]
      },
      title: {
        text: "Yearly Data",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 4,
        colors: ["#FFA41B"], 
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      yaxis: {
        min: -10,
        max: 40,
        title: {
          text: "Engagement"
        }
      }
    };
   }

  ngOnInit(): void {
  }

}
