import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  filterToggle=false;
  Category: string[] = [];
  Tag :string[] = [];
  selectedItems: string[] = [];
  singleselectedItems: string[] = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;
  isCollapsed = false;
  collapsed = true;
  ngOnInit(): void {
    this.Category = ['IND Logistics', 'IND Construction', 'IND Manufacturing', 'IND Mining','GEO India','GEO USA'];
    this.Tag = ['CPM','ERP','SCM','Order Management','Mobile','Checklist']
    this.selectedItems = ['Chemicals', 'Logistics'];
    this.singleselectedItems = ['Chemicals'];
    this.singledropdownSettings = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection
  };
  this.dropdownSettings = {
    singleSelection: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter:true
  };

  }
  openn(content: string) {
    this.modalService.open(content, { size: 'md', centered: true,});
  }
  openCredentials(content: string) {
    this.modalService.open(content, { size: 'md', centered: true,});
  }
  modalOpen(modalBasic) {
    this.modalService.open(modalBasic);
  }

}
