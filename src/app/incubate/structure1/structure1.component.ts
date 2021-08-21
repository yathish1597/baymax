import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-structure1',
  templateUrl: './structure1.component.html',
  styleUrls: ['./structure1.component.scss']
})
export class Structure1Component implements OnInit {
  fbtn:boolean = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  togglefbtn(){
    this.fbtn=!this.fbtn;
  }
  modalOpen(modalBasic) {
    this.modalService.open(modalBasic);
  }

}
