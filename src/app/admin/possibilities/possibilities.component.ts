import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-possibilities',
  templateUrl: './possibilities.component.html',
  styleUrls: ['./possibilities.component.scss']
})
export class PossibilitiesComponent implements OnInit {

  header: string = 'Add';

  filterToggle = false;
  constructor(private modalService: NgbModal) { }
  movies = [
    {mname:'Logged',status:true},
    {mname:'Crisis',status:true},
    {mname:'Good',status:true},
    {mname:'Reopened',status:true},
    {mname:'WIP',status:true},
    {mname:'Excellent',status:true},
  ];

  // orientation
  horizontalOrientation = [
    'React',
    'Angular',
    'Vuejs',
    'Bootstrap',
    'Laravel',
    'Shopify',
    'Wordpress',
    'Jquery',
    'Ant.js',
    'Reactstrap',
    'Vuetify',
  ];

  // Transfer Items Between Lists
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail'];

  // ood even number
  all = [1, 3, 5, 6, 7, 8, 9];
  even = [10, 2, 4];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.all, event.previousIndex, event.currentIndex);
  }
  orientationDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.horizontalOrientation,
      event.previousIndex,
      event.currentIndex
    );
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  oddevenDrop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }
  ngOnInit(){

  }
  open(targetModal: NgbModal, user: string | null) {
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
}
