import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  public baseUrl="http://localhost:3000";      ///Temporary Need To Be pushed To Env

  constructor(private _http:HttpClient) { }


  getProjects():Observable<any>{
    const url=`${this.baseUrl}/Projects`;
    return this._http.get(url);
  }

  postProjects(data:any):Observable<any>{
    debugger;
    const url=`${this.baseUrl}/Projects`;
    return this._http.post(url,data);
  }

  updateProjects(id:number,data:any):Observable<any>{
    const url=`${this.baseUrl}/Projects/${id}`;
    return this._http.put(url,data);
  }

  deleteProjects(id:number):Observable<any>{
    const url=`${this.baseUrl}/Projects/${id}`;
    return this._http.delete(url);
  }
}
