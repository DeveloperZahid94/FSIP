import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcrEnginesComponent } from './ocr-engines.component';
import { ViewOcrEngineListsComponent } from './view-ocr-engine-lists/view-ocr-engine-lists.component';

const routes: Routes = [
  { path: '', component: OcrEnginesComponent ,
  children:[
    {path:'viewOcrEngineList',component:ViewOcrEngineListsComponent},
    {path:'**',component:ViewOcrEngineListsComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcrEnginesRoutingModule { }
