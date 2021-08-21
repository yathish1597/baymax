import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { CoreConfigService } from '@core/services/config.service';
import { AuthenticationService } from '../authentication.service';
import { SignInData } from '../login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 //  Public
 public coreConfig: any;
 public loginForm: FormGroup;
 public submitted = false;
 public passwordTextType: boolean;
public usr='';
public pass='';
public nxtpage='';
public crds:boolean;
  router: any;
  toastService: any;
login(){
  
}
 // Private
 private _unsubscribeAll: Subject<any>;

 /**
  * Constructor
  *
  * @param {CoreConfigService} _coreConfigService
  * @param {FormBuilder} _formBuilder
  */
 constructor(private _coreConfigService: CoreConfigService, private _formBuilder: FormBuilder, private authenticationservice: AuthenticationService
  ,private toastr: ToastrService) {
   this._unsubscribeAll = new Subject();

   // Configure the layout
   this._coreConfigService.config = {
     layout: {
       navbar: {
         hidden: true
       },
       menu: {
         hidden: true
       },
       footer: {
         hidden: true
       },
       customizer: false,
       enableLocalStorage: false
     }
   };
 }

 // convenience getter for easy access to form fields
 get f() {
   return this.loginForm.controls;
 }

 /**
  * Toggle password
  */
 togglePasswordTextType() {
   this.passwordTextType = !this.passwordTextType;
 }

 toastBasic(data, delayTime) {
  this.toastService.show(data, {
    delay: delayTime,
    autohide: true
  });
}

 /**
  * On Submit
  */
//  onSubmit() {
//    this.submitted = true;

//    // stop here if form is invalid
//    if (this.loginForm.invalid) {
//      return;
//    }
//  }

 // Lifecycle Hooks
 // -----------------------------------------------------------------------------------------------------

 /**
  * On init
  */
 ngOnInit(): void {
   this.loginForm = this._formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', Validators.required]
   });

   // Subscribe to config changes
   this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
     this.coreConfig = config;
   });
 }

 /**
  * On destroy
  */
 ngOnDestroy(): void {
   // Unsubscribe from all subscriptions
   this._unsubscribeAll.next();
   this._unsubscribeAll.complete();
 }

//  public onSubmit(values:any) {
//   if (this.loginForm.valid) {
//     if (values.email == "admin@optionmatrix.com" && values.password == 'admin') {
//       this.router.navigate(['/analytics/dashboard']);
//       // this.alertService.createAlert("Login successful",1);
//       this.toastr.success('Login Successful', 'Success');
//     }
//     else {
//       this.toastr.error('Invalid Credentials', 'Error');
//     }
//   }
//   else {
//     this.toastr.error('Invalid Credentials', 'Error');
//   }
// }

onSubmit(signInForm : NgForm){
  const signInData = new SignInData(this.loginForm.value.email, this.loginForm.value.password);
  this.authenticationservice.authenticate(signInData);
  this.checkCredentials(signInForm)
}
isFormvalid :boolean= false;
  areCredentialsInvalid: boolean = false;
  private checkCredentials(loginForm: NgForm){
    const signInData = new SignInData(this.loginForm.value.email, this.loginForm.value.password)
    if(!this.authenticationservice.authenticate(signInData)){
      this.isFormvalid=false;
      this.areCredentialsInvalid = true;
    }
  }

}
