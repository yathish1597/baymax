import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.scss']
})
export class StructuresComponent implements OnInit {
fbtn:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
togglefbtn(){
  this.fbtn=!this.fbtn;
}
}
