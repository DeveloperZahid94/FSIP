import { Component, OnInit } from '@angular/core';
import { PageTypeServiceService } from 'src/app/page-types/page-type-service.service';

@Component({
  selector: 'app-forms-onboard',
  templateUrl: './forms-onboard.component.html',
  styleUrls: ['./forms-onboard.component.css']
})
export class FormsOnboardComponent implements OnInit {
public pageTypes:any[]=[];


constructor(
  private _pageServ:PageTypeServiceService
){}


  
ngOnInit(): void {
  this.getAllPagesTypes();
  
}




public getAllPagesTypes(){
  this._pageServ.getPageType().subscribe((res:any[])=>{
    console.log("page",res);
    this.pageTypes=res;
  })
}


}
