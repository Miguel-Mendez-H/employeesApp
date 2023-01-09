import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

import { ModalComponent } from '../../modal/modal.component';
import { FormModalComponent } from '../../form-modal/form-modal.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})

export class EmployeeInfoComponent implements OnInit {

  employeeToDisplay: any;
  cardId: any;
  deleted: any
  updated: any
  dataInputs: any

  constructor(private apiService: ApiService, private route: ActivatedRoute, public modal: ModalComponent, public modal2: FormModalComponent, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.cardId = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.gettingEmployee()
  }

  //getAll
  private async gettingEmployee() {
    this.apiService.getDataEmployeeById(this.cardId).subscribe(data => {
      this.employeeToDisplay = data
    })
  }

  //deleting employee
  deletingEmployee() {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.apiService.deleteEmployee(this.cardId).subscribe(data => {
          this.deleted = data
          this.openSnackBar(this.deleted.message)
        })
      }
    })
  }

  //Post

  //test modify employee - put
  updateEmployee() {
    //declare data input to send values of employee to a modal inputs by default
    const dataInputs = {
      name: this.employeeToDisplay.employee_name,
      age: this.employeeToDisplay.employee_age,
      salary: this.employeeToDisplay.employee_salary,
      tittle:'Update'
    }

    const dialogRef = this.dialog.open(FormModalComponent, {
      data: dataInputs,
    })

    dialogRef.afterClosed().subscribe(result => {
      
      if (result === true) {
        this.apiService.updateEmployee(this.dataInputs, this.cardId).subscribe(data => {
          this.updated = data
          this.openSnackBar(this.updated.message)
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
