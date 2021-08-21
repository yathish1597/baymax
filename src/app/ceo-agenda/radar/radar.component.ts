import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

  public canvasWidth = 300
  public needleValue = 75
  public centralLabel = ''
  public name = 'Gauge chart'
  public bottomLabel = '75%'
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(44, 151, 222)', 'lightgray'],
      arcDelimiters: [75],
      rangeLabel: ['0', '100'],
      needleStartValue: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
