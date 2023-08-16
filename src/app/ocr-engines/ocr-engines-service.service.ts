import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcrEnginesServiceService {
  public baseUrl="http://localhost:3000";      ///Temporary Need To Be pushed To Env

  constructor(private _http:HttpClient) { }


  getOCREngines():Observable<any>{
    const url=`${this.baseUrl}/OCREngines`;
    return this._http.get(url);
  }

  postOCREngines(data:any):Observable<any>{
    debugger;
    const url=`${this.baseUrl}/OCREngines`;
    return this._http.post(url,data);
  }

  updateOCREngines(id:number,data:any):Observable<any>{
    const url=`${this.baseUrl}/OCREngines/${id}`;
    return this._http.put(url,data);
  }

  deleteOCREngines(id:number):Observable<any>{
    const url=`${this.baseUrl}/OCREngines/${id}`;
    return this._http.delete(url);
  }
}
