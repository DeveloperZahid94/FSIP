import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldServiceService {
  public baseUrl="http://localhost:3000";     ///Temporary Need To Be pushed To Env

  constructor(private _http:HttpClient) { }


  getField():Observable<any>{
    const url=`${this.baseUrl}/Fields`;
    return this._http.get(url);
  }

  postField(data:any):Observable<any>{
    const url=`${this.baseUrl}/Fields`;
    return this._http.post(url,data);
  }

  updateField(id:number,data:any):Observable<any>{
    const url=`${this.baseUrl}/Fields/${id}`;
    return this._http.put(url,data);
  }

  deleteField(id:number):Observable<any>{
    const url=`${this.baseUrl}/Fields/${id}`;
    return this._http.delete(url);
  }

}
