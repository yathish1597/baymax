import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prototypes',
  templateUrl: './prototypes.component.html',
  styleUrls: ['./prototypes.component.scss']
})
export class PrototypesComponent implements OnInit {

  displayValue: number = 1;

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

  page = 4;
  page2 = 1;
  currentPage = 3;
  disablepage = 3;
  isDisabled = true;
  pagecustom = 4;
  toggleDisabled() {
  this.isDisabled = !this.isDisabled;
  }

  constructor(private modalService: NgbModal) { }

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
onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}
openn(content: string) {
  this.modalService.open(content, { size: 'md', centered: true,});
}

openCredentials(content: string) {
  this.modalService.open(content, { size: 'md', centered: true,});
}

modal(content: string) {
  this.modalService.open(content, { size: 'sm', centered: true,});
}

changeDisplayValue(value: number) {
  this.displayValue = value;
}

}
