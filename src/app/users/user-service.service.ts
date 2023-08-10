import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public baseUrl="http://localhost:3000";

  constructor(private _http:HttpClient) { }


  getUsers():Observable<any>{
    const url=`${this.baseUrl}/Users`;
    return this._http.get(url);
  }

  postUsers(data:any):Observable<any>{
    const url=`${this.baseUrl}/Users`;
    return this._http.post(url,data);
  }



}
