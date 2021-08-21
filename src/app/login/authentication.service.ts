import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignInData } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // constructor() { }
  private readonly mockedUser = new SignInData('admin@vuexy.com','admin')
  isAuthenticated = false

  constructor(private router: Router, private toastr:ToastrService) { }

  authenticate(signInData : SignInData): boolean{
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(["/analytics/dashboard/parallelprojects"])
      return true;
      
    }
    else{
      // this.toastr.error('Invalid Credentials', 'Error');
      alert('incorrect userName or Password');
      this.isAuthenticated = false;
      return false;
    }
    
    
  }

  private checkCredentials(signInData : SignInData): boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword())
  }

  private checkEmail(email: string): boolean{
    return email == this.mockedUser.getEmail();
  }

  private checkPassword(password: any): boolean{
    return password == this.mockedUser.getPassword();
  }
}
