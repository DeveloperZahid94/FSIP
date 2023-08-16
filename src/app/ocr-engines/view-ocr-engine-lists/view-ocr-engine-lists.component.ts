import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { AddEditOcrEngineComponent } from '../add-edit-ocr-engine/add-edit-ocr-engine.component';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';
import { OcrEnginesServiceService } from '../ocr-engines-service.service';

@Component({
  selector: 'app-view-ocr-engine-lists',
  templateUrl: './view-ocr-engine-lists.component.html',
  styleUrls: ['./view-ocr-engine-lists.component.css']
})
export class ViewOcrEngineListsComponent {
  public roleList:any=[];
  constructor(
    private dialog: MatDialog,
    private _ocrEnginerService:OcrEnginesServiceService,
    private _sBService:SnackBarServiceService 
    ){}

  displayedColumns: string[] = [ 'engineCode','engineName','description','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.ocrEngineList();
  }


/** 
   * Method To Open Dialog For Add/Edit OCR_Engine based on Action passed  
  */
  public ocrEngineAction(event:string,ele:any){
    return this.dialog.open(AddEditOcrEngineComponent, {width: '50%', height: '350px',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.ocrEngineList();
        }
          
      });
  }

  /** 
   * Method To get List of OCR_Engine  
  */
  private ocrEngineList(){
    this._ocrEnginerService.getOCREngines().subscribe(res=>{
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
    },err=>{
      console.log(err);
    })
  }


  /** 
   * Method To get delete  OCR_Engine  
  */
  public deleteocrEngine(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '210px',data:{Message:'Delete OCR-Engine'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._ocrEnginerService.deleteOCREngines(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("OCR-Engine Deleted Successfully","done");
              this.ocrEngineList();
            }  
          },err=>{
            console.log(err);
          })
        }
      });
  }
}
