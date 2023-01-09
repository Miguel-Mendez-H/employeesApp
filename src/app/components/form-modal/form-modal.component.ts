import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {
  static openDialog: any;
  data:any

  constructor(@Inject(MAT_DIALOG_DATA) public modalData:any, public dialog:MatDialog) {
    this.data = modalData
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(FormModalComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
