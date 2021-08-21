import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  // {
  //   id: 'home',
  //   title: 'Home',
  //   translate: 'MENU.HOME',
  //   type: 'item',
  //   icon: 'home',
  //   url: 'home'
  // },
  {
    id: 'analytics',
    title: 'Analytics',
    // translate: 'MENU.HOME',
    type: 'item',
    icon: 'trending-up',
    url:'analytics',
  },
  {
    id: 'leads',
    title: 'Leads',
    // translate: 'MENU.HOME',
    type: 'item',
    icon: 'award',
    url: 'leads'
  },
  // {
  //   id: 'sample',
  //   title: 'Sample',
  //   translate: 'MENU.SAMPLE',
  //   type: 'item',
  //   icon: 'file',
  //   url: 'sample'
  // },
  {
    id: 'meetings',
    title: 'Meetings',
    // translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'calendar',
    url: 'meetings'
  },
  
  {
    id: 'ceo-agenda',
    title: 'CEO-Agenda',
    // translate: 'MENU.SAMPLE',
    type: 'collapsible',
    icon: 'list',
    children:[
      {
        id:'structure',
        title:'Structure',
        type:'item',
        icon:'chevrons-right',
        url:'ceo-agenda/structure'
      },
      {
        id:'perspective',
        title:'Allocation',
        type:'item',
        icon:'chevrons-right',
        url:'ceo-agenda/perspective'
      },
      // {
      //   id:'radar',
      //   title:'Radar',
      //   type:'item',
      //   icon:'chevrons-right',
      //   url:'ceo-agenda/radar'
      // },
      {
        id:'action',
        title:'Action',
        type:'item',
        icon:'chevrons-right',
        url:'ceo-agenda/action'
      },
      {
        id:'digitaltwin',
        title:'Digital Twin',
        type:'item',
        icon:'chevrons-right',
        url:'ceo-agenda/digitaltwin'
      },
      // {
      //   id:'kpimetrics',
      //   title:'KPI Metrics',
      //   type:'item',
      //   icon:'chevrons-right',
      //   url:'ceo-agenda/kpimetrics'
      // }
    ]
  },

  {
    id: 'portfolio',
    title: 'Portfolio',
    // translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'feather',
    url: 'portfolio'
  },
  {
    id:'admin',
    title:'Admin',
    type:'collapsible',
    icon:'user',
    children:[
      {
        id:'users',
        title:'Users',
        type:'item',
        icon:'chevrons-right',
        url:'admin/users'
      },
      {
        id:'kanban',
        title:'Kanban',
        type:'item',
        icon:'chevrons-right',
        url:'admin/prospects'
      },
      {
        id:'backlog',
        title:'Backlog',
        type:'item',
        icon:'chevrons-right',
        url:'admin/backlog'
      }
    ]
  }
]
