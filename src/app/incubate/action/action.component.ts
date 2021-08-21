import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
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
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions1>;
  public chartOptions2: Partial<ChartOptions2>;
  public expanded:boolean=false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  displayValue: boolean = true;
  btmdisplayValue:number=1;

  inst1: number;
  inst2: number;
  inst3: number;
  inst4: number;
  inst5: number;
  inst6: number;
  ins1: number;
  ins2: number;
  ins3: number;
  ins4: number;
  ins5: number;
  ins6: number;



  constructor(private modalService: NgbModal,private _formBuilder: FormBuilder) {
    
    this.inst1 = 2;
    this.inst2 = 3;
    this.inst3 = 1;
    this.inst4 = 3;
    this.inst5 = 4;
    this.inst6 = 3;
    this.ins1 = 2;
    this.ins2 = 3;
    this.ins3 = 1;
    this.ins4 = 3;
    this.ins5 = 4;
    this.ins6 = 3;

    this.chartOptions2 = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20]
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      title: {
        text: ""
      },
      xaxis: {
        categories: ["Body Positive", "Innovation", "Fast Company", "Operations", "Yoga&Music", "Family"]
      }
    };
    this.chartOptions = {
      series: [
        {
          name: "Hours",
          data:[3,5,4,5,4,6,5,7,6,8]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        width:[5]
      },
      title: {
        text: "Hours by Date",
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
          "Jul 26",
          "Jul 27",
          "Jul 28",
          "Jul 29",
          "Jul 30",
          "Jul 31",
          "Aug 01",
          "Aug 02",
          "Aug 03",
          "Aug 04"
        ]
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Items",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 130,150]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#FFA500"],
      stroke: {
        curve: "straight",
        width:[5]
      },
      title: {
        text: "Items by Date",
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
          "Jul 26",
          "Jul 27",
          "Jul 28",
          "Jul 29",
          "Jul 30",
          "Jul 31",
          "Aug 01",
          "Aug 02",
          "Aug 03",
          "Aug 04"
        ]
      }
    };
   }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
  modalOpen(modalBasic) {
    this.modalService.open(modalBasic,{ size: 'lg', centered: true });
  }
  modalOpenVC(modalVC) {
    this.modalService.open(modalVC,{ size: 'lg', centered: true });
  }
  changeDisplayValue() {
    this.displayValue = ! this.displayValue;
  }
  btmDisplayValue(value: number){
    this.btmdisplayValue=value;
  }
  expand(){
    this.expanded=!this.expanded;
  }

  changeColor1(colNum: number) {
    // if (this.inst1 == 4) {
    //   this.inst1 = 1;
    // } else {
    //   this.inst1 ++;
    // }
    this.inst1=colNum;
  }
  changeColorb1(colNum: number) {
    if (this.ins1 == 4) {
      this.ins1 = 1;
    } else {
      this.ins1 ++;
    }
    // this.inst1=colNum;
  }

  changeColor2(colNum: number) {
    // if (this.inst2 == 4) {
    //   this.inst2 = 1;
    // } else {
    //   this.inst2 ++;
    // }
    this.inst2=colNum;
  }
  changeColorb2(colNum: number) {
    if (this.ins2 == 4) {
      this.ins2 = 1;
    } else {
      this.ins2 ++;
    }
    // this.inst2=colNum;
  }

  changeColor3(colNum: number) {
    // if (this.inst3 == 4) {
    //   this.inst3 = 1;
    // } else {
    //   this.inst3 ++;
    // }
    this.inst3=colNum;
  }
  changeColorb3(colNum: number) {
    if (this.ins3 == 4) {
      this.ins3 = 1;
    } else {
      this.ins3 ++;
    }
    // this.inst2=colNum;
  }
  changeColor4(colNum: number) {
    // if (this.inst4 == 4) {
    //   this.inst4 = 1;
    // } else {
    //   this.inst4++;
    // }
    this.inst4=colNum;
  }
  changeColorb4(colNum: number) {
    if (this.ins4 == 4) {
      this.ins4 = 1;
    } else {
      this.ins4 ++;
    }
    // this.inst2=colNum;
  }
  changeColor5(colNum: number) {
    // if (this.inst5 == 4) {
    //   this.inst5 = 1;
    // } else {
    //   this.inst5 ++;
    // }
    this.inst5=colNum;
  }
  changeColorb5(colNum: number) {
    if (this.ins5 == 4) {
      this.ins5 = 1;
    } else {
      this.ins5 ++;
    }
    // this.inst2=colNum;
  }
  changeColor6(colNum: number) {
    // if (this.inst6 == 4) {
    //   this.inst6 = 1;
    // } else {
    //   this.inst6 ++;
    // }
    this.inst6=colNum;
  }
  changeColorb6(colNum: number) {
    if (this.ins6 == 4) {
      this.ins6 = 1;
    } else {
      this.ins6 ++;
    }
    // this.inst2=colNum;
  }


}
