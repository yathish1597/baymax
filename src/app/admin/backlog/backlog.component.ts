import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  header: string = 'Add';
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: any;
  Industries: string[] = [];
  Countries: string[] = [];
  BDNames: string[] = [];
  Solutions: string[] = [];
  Tags: string[] = [];
  HeadCount: string[] = [];
  Datetypes: string[] = [];
  RMName: string[] = [];
  SDName: string[] = [];
  Status:string[] = [];
  selectedItems: string[] = [];
  singleselectedItems: string[] = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;
  filterToggle = false;
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

getPageSymbol(current: number) {
return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
}

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.Industries = ['Chemicals', 'Logistics & Supply chain', 'Digital Marketing Agencies', 'Import & Export'];
    this.Countries = ['India','Canada','South Africa','United States','Mexico'];
    this.BDNames = ['Navin Malik','Anna Malik'];
    this.selectedItems = ['Chemicals', 'Import & Export'];
    this.Solutions = ['Other','Event Manager','Online Food Ordering','Home Care & Tele Medicine','EMR & Clinical Scheduling'];
    this.RMName = ['Navin Malik','Anna Mary'];
    this.SDName = ['Navin Malik','Anna Mary'];
    this.Tags = ['Send Profile','Excluded','Not Confirmed','Hold','Priority'];
    this.HeadCount = ['Small (Less than 50)','Emerging (50-200)','Mid Sized (200-1000)','Large (1000+)'];
    this.Datetypes = ['RES Date','VASL Date','CALL Date','DEMO Date','Meeting Date','Follow UP Date'];
    this.Status = ['Active','Inactive']
    this.selectedItems = ['Pune', 'Navsari'];
    this.singleselectedItems = ['Pune'];
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

  items = [
    {sub: 'Changes in Analytics Screen', screen: 'Analytics', created: 'Charitha Gajulapalli', dev: 'Mahesh', devDate: '19-04-2021', devEffort: '-', qaDate: '20-04-2021', demoDate: '20-04-2021', ux: '0/0', docs: 0, priority: 'High'},
    {sub: 'Integrating LGP', screen: 'Cultivate', created: 'Charitha Gajulapalli', dev: 'Mahesh', devDate: '19-04-2021', devEffort: '-', qaDate: '20-04-2021', demoDate: '20-04-2021', ux: '0/0', docs: 0, priority: 'High'},
    {sub: 'Global Filter Issue', screen: 'Admin', created: 'Charitha Gajulapalli', dev: 'Mahesh', devDate: '19-04-2021', devEffort: '-', qaDate: '20-04-2021', demoDate: '20-04-2021', ux: '0/0', docs: 0, priority: 'High'},
    {sub: 'Lead Generation Partners Screen', screen: 'Admin', created: 'Charitha Gajulapalli', dev: 'Mahesh', devDate: '16-04-2021', devEffort: '-', qaDate: '20-04-2021', demoDate: '20-04-2021', ux: '0/0', docs: 0, priority: 'High'},
    {sub: 'Role Matrix Filter in Possibilities', screen: 'Possibilities', created: 'Charitha Gajulapalli', dev: 'Mahesh', devDate: '16-04-2021', devEffort: '-', qaDate: '20-04-2021', demoDate: '20-04-2021', ux: '0/0', docs: 0, priority: 'High'},
  ]


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  open(content: string) {
    this.modalService.open(content, { size: 'md', centered: true });
  }

  opens(content: string) {
    this.modalService.open(content, { size: 'md', centered: true });
  }

  openn(targetModal: NgbModal, user: string | null) {
    if(user) {
      this.header = 'Edit';
    } else {
      this.header = 'Add';
    }
    this.modalService.open(targetModal, {
        centered: true,
        // backdrop: 'static'
    });
  }
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 300), behavior: 'smooth' });
  }
  
  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 300), behavior: 'smooth' });
  }
  
}
