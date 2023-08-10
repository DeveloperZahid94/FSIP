import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarServiceService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message:string,Action:string) {
    this._snackBar.open(message,Action,{
      duration:3000,
      verticalPosition:'bottom',
    });
  }

}
