import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { AddEditFieldLibraryComponent } from '../add-edit-field-library/add-edit-field-library.component';
import { CustomerServiceService } from 'src/app/customers/customer-service.service';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';
import { FieldServiceService } from '../field-service.service';

@Component({
  selector: 'app-view-field-list',
  templateUrl: './view-field-list.component.html',
  styleUrls: ['./view-field-list.component.css']
})
export class ViewFieldListComponent {
  public roleList:any=[];
  constructor(
    private dialog: MatDialog,
    private _fieldService:FieldServiceService,
    private _sBService:SnackBarServiceService 
    ){}

  displayedColumns: string[] = ['fieldLabel','fieldName','placeholder','controlType','dataType','required','readOnly','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
     this.fieldList();
  }


/** 
* Method To Open Dialog For Add/Edit customer based on Action passed  
*/
  public fieldAction(event:string,ele:any){
    return this.dialog.open(AddEditFieldLibraryComponent, {width: '90%', height: '590px',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.fieldList();
        }
          
      });
  }

  /** 
   * Method To get List of customer  
  */
  private fieldList(){
    this._fieldService.getField().subscribe(res=>{
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
    },err=>{
      console.log(err);
    })
  }


  /** 
   * Method To get delete  customer  
  */
  public deletefield(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '210px',data:{Message:'Delete Field'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._fieldService.deleteField(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("Field Deleted Successfully","done");
              this.fieldList();
            }  
          },err=>{
            console.log(err);
          })
        }
      });
  }
}
