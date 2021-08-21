import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  draggedItem: any;
  public contentHeader:object;
  cities: string[] = [];
  selectedItems: string[] = [];
  singleselectedItems: string[] = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;
  filterToggle = false;

  localData: any[] = [
    { id:"kanban_table_1",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Discussion ', header: 'Discussion (2)', data : [{ id: 'kanban_item_1161', name: '5-35151', info: 'Updates: 5', colorCode: 'Green',projectcode:"The Storag",stage:"Canada | Anna M",percentage: 'Updates : 0'}, 
    { id:'kanban_item_1163', collapsed:false,name: 'Reference Plan',  info: 'Updates: 2', colorCode: 'Green', campaign: 'Delpark Homes | Dave',projectcode:"ARANI",stage:"Canada | Anna M",percentage: 'Updates : 0'}]},
    { id:"kanban_table_2",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'NDA', header: 'NDA (1)', data : [{ id: 'kanban_item_1162', name: 'Topographic',  info: 'Updates: 7', colorCode: 'Red',projectcode:"Future Fit",stage:"Australia | Anna M",percentage: 'Updates : 0'}]},
    { id:"kanban_table_3", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Initial Concept', header: 'Initial Concept (1)', data : [{ id: 'kanban_item_1166', name: 'TRPR',projectcode:"T & J Cons",stage:"Australia | Anna M",percentage: 'Updates : 0'}]},
    { id:"kanban_table_4", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Archives', header: 'Archives (1)', data : [{ id: 'kanban_item_1164', name: 'Survey',  info: 'Updates: 2', colorCode: 'Green',projectcode:"G & G Mining",stage:"Australia | Anna M",percentage: 'Updates : 0'}]},
    { id:"kanban_table_5",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Potential', header: 'Potential (1)', data : [{ id: 'kanban_item_1166', name: 'SRPR', info: 'Updates: 3', colorCode: 'Green',projectcode:"Natura Shi",stage:"Australia | Anna M",percentage: 'Updates : 0'}]},
    { id:"kanban_table_6", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Specs', header: 'Specs (0)', data : []},
    { id:"kanban_table_7",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Opportunity', header: 'Opportunity (0)', data : []},
    { id:"kanban_table_8",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Hold or Later', header: 'Hold or Later (0)', data : []},
    { id:"kanban_table_9",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Demo', header: 'Demo (0)', data : []},
];
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

  constructor() { }

  ngOnInit() {
this.cities = ['Mumbai', 'New Delhi', 'Bangaluru', 'Pune', 'Navsari'];
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

dragStart(event:any, item:any, sourceKanbanId:any) {
  this.draggedItem = item;
  this.draggedItem.kanbanId = sourceKanbanId;
}

drag(item:any) {
  // document.getElementById(item.id).style.display = "none";
}

drop(event:any) {
  if (this.draggedItem && this.draggedItem.kanbanId && event.event.path[3]['id']) {
      this.moveItem(this.draggedItem, event.event.path[3]['id']);
      this.draggedItem = null;
  }
}

dragEnd(event:any, item:any) {
  // document.getElementById(item.id).style.display = "table-row";
  this.draggedItem = null;
}

  moveItem(draggedItem:any, kanbanId:any) {
  for (let i = 0; i < this.localData.length; i++) {
    if (kanbanId === this.localData[i].id) {
      if (i % 2 === 0) {
        draggedItem.hex = "#FFFFFF";
      } else {
        draggedItem.hex = "#E0E0E0";
      }
      this.localData[i].data.push(draggedItem);
      this.localData[i].header = "";
      this.localData[i].header =
        this.localData[i].stage + " (" + this.localData[i].data.length + ")";
    }
    if (draggedItem.kanbanId === this.localData[i].id) {
      var temp = this.localData[i].data;
      for (let j = 0; j < temp.length; j++) {
        if (temp[j].id === draggedItem.id) {
          this.localData[i].data.splice(j, 1);
          this.localData[i].header = "";
          this.localData[i].header =
            this.localData[i].stage + " (" + this.localData[i].data.length + ")";
        }
      }
    }
  }
   }

changestatus(index:any){
  this.localData[index].collapsed=!this.localData[index].collapsed;
}
  // scrollKanban(side:any) {
  //   var ele = document.getElementById('kanban-table-container');
  //   if (side == 'left')
  //       ele.scrollLeft += 210;
  //   else
  //       ele.scrollLeft -= 210;
  //  }
}
