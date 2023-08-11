import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  public baseUrl="http://localhost:3000";      ///Temporary Need To Be pushed To Env

  constructor(private _http:HttpClient) { }


  getCustomers():Observable<any>{
    const url=`${this.baseUrl}/Customers`;
    return this._http.get(url);
  }

  postCustomers(data:any):Observable<any>{
    debugger;
    const url=`${this.baseUrl}/Customers`;
    return this._http.post(url,data);
  }

  updateCustomers(id:number,data:any):Observable<any>{
    const url=`${this.baseUrl}/Customers/${id}`;
    return this._http.put(url,data);
  }

  deleteCustomers(id:number):Observable<any>{
    const url=`${this.baseUrl}/Customers/${id}`;
    return this._http.delete(url);
  }

}