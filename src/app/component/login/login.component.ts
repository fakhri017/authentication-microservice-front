import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user :User = new User() ;
  public profileForm : FormGroup ;
  public invalidCredentials: boolean = false ;
  constructor(private fb: FormBuilder , private loginService : LoginService) { }


  ngOnInit(): void {
     this.initFormElements() ;
  }


  /**
   * login with the given credentials
   */
  public login() : void {
  this.loginService.login(this.user).subscribe(()=>{
    // navigate to the next page
  } ,
    (error)=>{
     if(error.status == 403){
      this.invalidCredentials = true ;
    }
    });
  }


  /**
   * init form elments and validators
   * @private
   */
  private initFormElements() : void {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
