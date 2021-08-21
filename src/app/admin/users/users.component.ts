import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private modalService: NgbModal) {

    this.Category = ['Active','InActive'];
   }
  filterToggle=false;
  Category: string[] = [];

  ngOnInit(): void {
  }
  

  openn(content: string) {
    this.modalService.open(content, { size: 'md', centered: false,});
  }
  
}
