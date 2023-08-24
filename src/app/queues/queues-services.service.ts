import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueuesServicesService {

  public baseUrl="http://localhost:3000";      ///Temporary Need To Be pushed To Env

  constructor(private _http:HttpClient) { }


  getQueues():Observable<any>{
    const url=`${this.baseUrl}/Queues`;
    return this._http.get(url);
  }

  postQueues(data:any):Observable<any>{
    const url=`${this.baseUrl}/Queues`;
    return this._http.post(url,data);
  }

  updateQueues(id:number,data:any):Observable<any>{
    const url=`${this.baseUrl}/Queues/${id}`;
    return this._http.put(url,data);
  }

  deleteQueues(id:number):Observable<any>{
    const url=`${this.baseUrl}/Queues/${id}`;
    return this._http.delete(url);
  }

  
}
