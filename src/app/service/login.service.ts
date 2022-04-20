import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../model/User';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LOGIN_URL = 'http://localhost:8081/login';


  constructor(private http: HttpClient) {
  }


  public login(user : User) {
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/x-www-form-urlencoded');

    // todo refactor into a requestBody !!
    return this.http.post(this.LOGIN_URL + '?username='+user.username + '&password='+user.password,{headers:  headers }) ;


  }


}
