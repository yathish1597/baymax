import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

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

logItems = [
  { screen: 'Research', date: '2021-05-10', day: '0 Day(s)' },
  { screen: 'Quality', date: '2021-05-10', day: '0 Day(s)' },
  { screen: 'Initiated', date: '2021-05-10', day: '9 Day(s)' },
  { screen: 'Conversation', date: '-', day: '-' },
  { screen: 'Possibilities', date: '-', day: '-' },
  { screen: 'Opportunities', date: '-', day: '-' },
  { screen: 'Awarded', date: '-', day: '-' },
];

items = [
  { contact: 'Mike', business: 'Construction', subject: 'Subject 1', meeting: 'Meeting 3', country: 'Australia', date: '22/05/2021', time: '7:05', duration: ' 2 hrs', notes: 'Notes', tz: 'Local', location: 'Sydney' },
  { contact: 'John', business: 'Manufacturing', subject: 'Subject 2', meeting: 'Meeting 2', country: 'UK', date: '12/04/2021', time: '17:45', duration: ' 3 hrs', notes: 'Notes', tz: 'Local', location: 'London' },
  { contact: 'Monal', business: 'Logistics', subject: 'Subject 3', meeting: 'Meeting 4', country: 'India', date: '05/09/2020', time: '12:30', duration: ' 2 hrs', notes: 'Notes', tz: 'Local', location: 'Hyderabad' },
  { contact: 'Jessica', business: 'Real Estate', subject: 'Subject 4', meeting: 'Meeting 2', country: 'Australia', date: '25/08/2020', time: '09:30', duration: ' 4 hrs', notes: 'Notes', tz: 'Local', location: 'Perth' },
  { contact: 'Andreana', business: 'Social Networking', subject: 'Subject 5', meeting: 'Meeting 5', country: 'USA', date: '22/05/2020', time: '18:00', duration: ' 2 hrs', notes: 'Notes', tz: 'Local', location: 'Los Angeles' },
];


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

  items1 = [
      {tagName:'NDA',kanban:'NDA',opportunityName:'ARANI',url:'view',emailId:'s.arani@arani.ca',contactNumber:'+15149032296',contactName:'Sean Arani',now:'Client has an requirement for e-commerce portal. Quals sent, received counter signed NDA',next:'Get Specs. Next follow up on May 27',notes:'Add',reference:'2',industry:'Manufacturing',country:'Canada',bdName:'Anna Mary',leadGp:'-',reviewDate:'Today',followUp:'2',ets:'5',headCount:'	Mid Sized (200-1000)',con:'1',mDate:'2021-05-19',rDate:'2021-05-19',qDate:'2021-05-19',iDate:'2021-05-19',dDate:'2021-05-19',p2Date:'	2021-05-18',p1Date:'	2021-05-18',log:'5|9',activity:'5|9',rmName:'Anna Mary',sdName:'Navin Malik',status:true,potential:'1'},
  ]

  items2 = [
    {opportunitiesName:'ARANI',contactName:'Sean Arani',now:'Client has an requirement for e-commerce portal. Quals sent, received counter signed NDA',next:'Get Specs. Next follow up on May 27',followUp:'1',ets:'3',potential:'2'},
  ]

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  open(content: string) {
    this.modalService.open(content, { size: 'lg', centered: true });
}
opens(content: string) {
  this.modalService.open(content, { size: 'lg', centered: true });
}
openn(content: string) {
  this.modalService.open(content, { size: 'lg', centered: true });
}

updateNewLead(item:any) {
  console.log(item, 'item');
  delete item['meeting_time']
  if (item['potential'] == 0) {
    item['potential'] = 1;
  } else if (item['potential'] == 1) {
    item['potential'] = 2;
  } else if (item['potential'] == 2) {
    item['potential'] = 3;
  } else if (item['potential'] == 3) {
    item['potential'] = 1;
  }
}


}
