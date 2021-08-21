import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: ['./perspective.component.scss']
})
export class PerspectiveComponent implements OnInit {
  inst11: number;
  inst12: number;
  inst13: number;
  inst14: number;

  inst1: number;
  inst2: number;
  inst3: number;
  inst4: number;
  inst5: number;
  inst6: number;


  constructor() {
    this.inst11 = 3;
    this.inst12 = 2;
    this.inst13 = 3;
    this.inst14 = 2;

    this.inst1 = 1;
    this.inst2 = 2;
    this.inst3 = 3;
    this.inst4 = 4;
    this.inst5 = 1;
    this.inst6 = 2;
  }

  ngOnInit(): void {
  }

  changeColor11(colNum: number) {
    if (this.inst11 == 4) {
      this.inst11 = 1;
    } else {
      this.inst11 ++;
    }
  }

  changeColor12(colNum: number) {
    if (this.inst12 == 4) {
      this.inst12 = 1;
    } else {
      this.inst12 ++;
    }
  }

  changeColor13(colNum: number) {
    if (this.inst13 == 4) {
      this.inst13 = 1;
    } else {
      this.inst13 ++;
    }
  }

  changeColor14(colNum: number) {
    if (this.inst14 == 4) {
      this.inst14 = 1;
    } else {
      this.inst14 ++;
    }
  }

  changeColor1(colNum: number) {
    if (this.inst1 == 4) {
      this.inst1 = 1;
    } else {
      this.inst1 ++;
    }
  }

  changeColor2(colNum: number) {
    if (this.inst2 == 4) {
      this.inst2 = 1;
    } else {
      this.inst2 ++;
    }
  }

  changeColor3(colNum: number) {
    if (this.inst3 == 4) {
      this.inst3 = 1;
    } else {
      this.inst3 ++;
    }
  }

  changeColor4(colNum: number) {
    if (this.inst4 == 4) {
      this.inst4 = 1;
    } else {
      this.inst4++;
    }
  }

  changeColor5(colNum: number) {
    if (this.inst5 == 4) {
      this.inst5 = 1;
    } else {
      this.inst5 ++;
    }
  }

  changeColor6(colNum: number) {
    if (this.inst6 == 4) {
      this.inst6 = 1;
    } else {
      this.inst6 ++;
    }
  }

}
