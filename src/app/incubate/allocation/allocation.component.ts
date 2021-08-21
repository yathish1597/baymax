import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.scss']
})
export class AllocationComponent implements OnInit {
public displayValue:number=1;
isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;

// public basicDPdata: NgbDateStruct;
// public contentHeader: object;
//   public TDNameVar;
//   public TDEmailVar;
//   public TDFirstNameVar;
//   public TDLastNameVar;
//   public twitterVar;
//   public facebookVar;
//   public googleVar;
//   public linkedinVar;
//   public landmarkVar;
//   public addressVar;
//   public selectBasic = [
//     { name: 'UK' },
//     { name: 'USA' },
//     { name: 'Spain' },
//     { name: 'France' },
//     { name: 'Italy' },
//     { name: 'Australia' }
//   ];

//   public selectMulti = [{ name: 'English' }, { name: 'French' }, { name: 'Spanish' }];
//   public selectMultiSelected;

//   // private
//   private horizontalWizardStepper: Stepper;
//   private verticalWizardStepper: Stepper;
//   private modernWizardStepper: Stepper;
//   private modernVerticalWizardStepper: Stepper;
//   private bsStepper;
// /**
//    * Horizontal Wizard Stepper Next
//    *
//    * @param data
//    */
  constructor(private modalService: NgbModal,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.modernWizardStepper = new Stepper(document.querySelector('#stepper3'), {
    //   linear: false,
    //   animation: true
    // });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
  changeDisplayValue(value: number) {
    this.displayValue = value;
  }
  modalOpen(modalBasic) {
    this.modalService.open(modalBasic,{ size: 'lg', centered: true });
  }
  // modernHorizontalNext() {
  //   this.modernWizardStepper.next();
  // }
  /**
   * Modern Horizontal Wizard Stepper Previous
   */
  // modernHorizontalPrevious() {
  //   this.modernWizardStepper.previous();
  // }
}
