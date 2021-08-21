import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BarChartModule } from '@swimlane/ngx-charts';
import { BreadcrumbComponent } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'app/layout/components/content-header/breadcrumb/breadcrumb.module';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit , BreadcrumbModule{
public contentHeader:object;
public btns:boolean=true;
@ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: any;
  showTable: boolean = true;

  Industries: string[] = [];
  Countries: string[] = [];
  BDNames: string[] = [];
  Solutions: string[] = [];
  Tags: string[] = [];
  HeadCount: string[] = [];
  Datetypes: string[] = [];
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

  ngOnInit()  {
    this.Industries = ['Chemicals', 'Logistics & Supply chain', 'Digital Marketing Agencies', 'Import & Export'];
    this.Countries = ['India','Canada','South Africa','United States','Mexico'];
    this.BDNames = ['Navin Malik','Anna Malik'];
    this.selectedItems = ['Chemicals', 'Import & Export'];
    this.Solutions = ['Other','Event Manager','Online Food Ordering','Home Care & Tele Medicine','EMR & Clinical Scheduling'];
    this.Tags = ['Send Profile','Excluded','Not Confirmed','Hold','Priority'];
    this.HeadCount = ['Small (Less than 50)','Emerging (50-200)','Mid Sized (200-1000)','Large (1000+)'];
    this.Datetypes = ['RES Date','VASL Date','CALL Date','DEMO Date','Meeting Date','Follow UP Date']
    this.singleselectedItems = ['Chemicals'];
    this.singledropdownSettings = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection,

      
    };


    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter:true
    };
    this.contentHeader = {
      headerTitle: 'Leads',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          // {
          //   name: 'Analytics',
          //   isLink: true,
          //   link: '/'
          // },
          {
            name: '',
            isLink: false,
            link:'/'
          },
          {
            name:'List of all potential customers and their flow through the Marketing process can be managed here.',
            isLink:false,
            link:'/'
          }
        ]
      }
    }
  }

  items1 = [
      {tagName:'Priority',leadName:'Pulse Pharmaceu',leadUrl:'view',emailId:'kiran.das@pulsepharma.net',contactNumber:'8978001236',contactName:'Kiran Das',now:'  Requirement for reports & presentation module, sent NDA, client will share the specs next week',next:'Next meeting on May 29th at 2:30 PM',notes:'Add',solution:'Default',reference:'-',industry:'Pharma',country:'India',bdName:'Anna Mary',leadGp:'Tech Manos',followUp:'2',ets:'5',headCount:'	Mid Sized (200-1000)',con:'0',mDate:'2021-05-19',rDate:'2021-05-19',qDate:'2021-05-19',iDate:'2021-05-19',dDate:'2021-05-19',log:'5|9',activity:'5|9',status:true,potential:'1'},
      {tagName:'Initial',leadName:'G&G Mining',leadUrl:'view',emailId:'ian.cornfoot@ggmining.com',contactNumber:'0417-610-865',contactName:'Ian Cornfoot',now:'	Meeting done on May 20. Send NDA',next:'Next call on June 10 at 3 pm Perth Time',notes:'Add',solution:'Default',reference:'-',industry:'Manufacturing',country:'Australia',bdName:'Anna Mary',leadGp:'Intro Meeting AUS',followUp:'1',ets:'22',headCount:'Small (Less than 50)',con:'0',mDate:'2021-05-19',rDate:'2021-05-19',qDate:'2021-05-19',iDate:'2021-05-19',dDate:'2021-05-19',log:'5|9',activity:'5|9',status:true,potential:'1'},
      {tagName:'Priority',leadName:'The Storage Box',leadUrl:'view',emailId:'domenic.bertoia@thestoragebox.com',contactNumber:'519-551-4165',contactName:'Domenic Bertoia',now:'Client is occupied till November',next:'Next follow-up in August 2021',notes:'Add',solution:'Default',reference:'-',industry:'Warehousing',country:'Canada',bdName:'Anna Mary',leadGp:'Zinoit',followUp:'23',ets:'18',headCount:'Small (Less than 50)',con:'0',mDate:'2021-05-19',rDate:'2021-05-19',qDate:'2021-05-19',iDate:'2021-05-19',dDate:'2021-05-19',log:'5|9',activity:'5|9',status:true,potential:'2'},
      {tagName:'Priority',leadName:'Sarah Construct',leadUrl:'view',emailId:'sgallant@lordon.com',contactNumber:'519-852-1115	',contactName:'Sam Gallant',now:'	Client has a requirement for Project Management, NDA has been shared',next:'Next meeting on 3rd June at 10 AM EDT',notes:'Add',solution:'Default',reference:'-',industry:'Construction',country:'Canada',bdName:'Anna Mary',leadGp:'Zinoit',followUp:'16',ets:'8',headCount:'	Emerging (50-200)',con:'0',mDate:'2021-05-19',rDate:'2021-05-19',qDate:'2021-05-19',iDate:'2021-05-19',dDate:'2021-05-19',log:'5|9',activity:'5|9',status:true,potential:'1'},
      {tagName:'Priority',leadName:'Pit N Portal',leadUrl:'view',emailId:'steve.versteegen@pitnportal.com.au',contactNumber:'0419344430',contactName:'Terry Tsapaliar',now:'Client has requirement for work force management',next:'Follow up in September',notes:'Add',solution:'Default',reference:'-',industry:'Construction',country:'Australia',bdName:'Anna Mary',leadGp:'Intro Meeting AUS',followUp:'8',ets:'31',headCount:'	Mid Sized (200-1000)',con:'0',mDate:'2021-05-19',rDate:'2021-05-19',qDate:'2021-05-19',iDate:'2021-05-19',dDate:'2021-05-19',log:'5|9',activity:'5|9',status:true,potential:'3'},
  ];

  items2 = [
    {leadName:'Pulse Pharmaceuticals',contactName:'Kiran Das',now:'Requirement for reports & presentation module, sent NDA, client will share the specs next week',next:'Next meeting on May 29th at 2:30 PM',followUp:'1',ets:'4',potential:'1'},
    {leadName:'G&G Mining',contactName:'Ian Cornfoot',now:'Meeting done on May 20. Send NDA',next:'	Next call on June 10 at 3 pm Perth Time',followUp:'16',ets:'21',potential:'2'},
    {leadName:'Lor-Don Limited',contactName:'Sam Gallant',now:'Client has a requirement for Project Management, NDA has been shared',next:'Next meeting on 3rd June at 10 AM EDT',followUp:'9',ets:'24',potential:'2'},
  ];

  logItems = [
    { screen: 'Research', date: '2021-05-10', day: '0 Day(s)' },
    { screen: 'Quality', date: '2021-05-10', day: '0 Day(s)' },
    { screen: 'Initiated', date: '2021-05-10', day: '9 Day(s)' },
    { screen: 'Conversation', date: '-', day: '-' },
    { screen: 'Possibilities', date: '-', day: '-' },
    { screen: 'Opportunities', date: '-', day: '-' },
    { screen: 'Awarded', date: '-', day: '-' },
  ];

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
changebtns(){
}
changeTable() {
  this.showTable = !this.showTable;
  this.btns=!this.btns;
}
public scrollRight(): void {
  this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 300), behavior: 'smooth' });
}

public scrollLeft(): void {
  this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 300), behavior: 'smooth' });
}

}
