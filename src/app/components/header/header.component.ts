import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { FormModalComponent } from '../form-modal/form-modal.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  employees1: any
  created: any
  dataInputs: any
  urlTree: any;

  constructor(private modal: FormModalComponent, private apiService: ApiService, private dialog: MatDialog, private snackBar: MatSnackBar) {

   }

  ngOnInit() {
   
  }

  createEmployee() {
    const dataInputs = {
      name: "",
      age: "",
      salary: "",
      tittle:'Create'
    }

    const dialogRef = this.dialog.open(FormModalComponent, {
      data: dataInputs
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.apiService.createEmployee(this.dataInputs).subscribe(data => {
          this.created = data
          this.openSnackBar(this.created.message)
        })
      }
    })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 5000,
    })
  }
}
