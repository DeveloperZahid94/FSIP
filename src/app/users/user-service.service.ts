import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public baseUrl="http://localhost:3000";     ///Temporary Need To Be pushed To Env

  constructor(private _http:HttpClient) { }


  getUsers():Observable<any>{
    const url=`${this.baseUrl}/Users`;
    return this._http.get(url);
  }

  postUsers(data:any):Observable<any>{
    const url=`${this.baseUrl}/Users`;
    return this._http.post(url,data);
  }

  updateUsers(id:number,data:any):Observable<any>{
    const url=`${this.baseUrl}/Users/${id}`;
    return this._http.put(url,data);
  }

  deleteUsers(id:number):Observable<any>{
    const url=`${this.baseUrl}/Users/${id}`;
    return this._http.delete(url);
  }



}
