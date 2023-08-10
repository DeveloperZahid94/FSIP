import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RolesServiceService {
  public baseUrl="http://localhost:3000";

  constructor(private _http:HttpClient) { }


  getRoles():Observable<any>{
    const url=`${this.baseUrl}/Roles`;
    return this._http.get(url);
  }

  postRoles(data:any):Observable<any>{
    const url=`${this.baseUrl}/Roles`;
    return this._http.post(url,data);
  }

  updateRoles(id:number,data:any):Observable<any>{
    const url=`${this.baseUrl}/Roles/${id}`;
    return this._http.put(url,data);
  }

  deleteRoles(id:number):Observable<any>{
    const url=`${this.baseUrl}/Roles/${id}`;
    return this._http.delete(url);
  }

  


}
