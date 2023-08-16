import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RejectionReasonServiceService {
  public baseUrl="http://localhost:3000";      ///Temporary Need To Be pushed To Env

  constructor(private _http:HttpClient) { }


  getReject():Observable<any>{
    const url=`${this.baseUrl}/RejectReason`;
    return this._http.get(url);
  }

  postReject(data:any):Observable<any>{
    const url=`${this.baseUrl}/RejectReason`;
    return this._http.post(url,data);
  }

  updateReject(id:number,data:any):Observable<any>{
    const url=`${this.baseUrl}/RejectReason/${id}`;
    return this._http.put(url,data);
  }

  deleteReject(id:number):Observable<any>{
    const url=`${this.baseUrl}/RejectReason/${id}`;
    return this._http.delete(url);
  }
}
