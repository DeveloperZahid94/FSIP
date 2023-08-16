import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTypeServiceService {
  public baseUrl="http://localhost:3000";      ///Temporary Need To Be pushed To Env

  constructor(private _http:HttpClient) { }


  getPageType():Observable<any>{
    const url=`${this.baseUrl}/PageType`;
    return this._http.get(url);
  }

  postPageType(data:any):Observable<any>{
    debugger;
    const url=`${this.baseUrl}/PageType`;
    return this._http.post(url,data);
  }

  updatePageType(id:number,data:any):Observable<any>{
    const url=`${this.baseUrl}/PageType/${id}`;
    return this._http.put(url,data);
  }

  deletePageType(id:number):Observable<any>{
    const url=`${this.baseUrl}/PageType/${id}`;
    return this._http.delete(url);
  }
}
