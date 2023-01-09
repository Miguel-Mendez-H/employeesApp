import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormModalComponent } from '../../form-modal/form-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit{

  data: any
  dataUserInfo: any;
  updated: any
  dataInputs:any

  constructor(private apiService: ApiService,
    public modal2: FormModalComponent, private dialog: MatDialog, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
      this.getEmployees()
  }

  private async getEmployees() {
    this.apiService.getDataEmployes()
      .subscribe(response => {
        this.dataUserInfo = response[1]
      })
  }

  updateUser(){
    const dataInputs = {
      name: this.dataUserInfo.employee_name,
      age: this.dataUserInfo.employee_age,
      salary: this.dataUserInfo.employee_salary,
      tittle:'Update'
    }
    const dialogRef = this.dialog.open(FormModalComponent, {
      data: dataInputs
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.apiService.updateEmployee(this.dataInputs, this.dataUserInfo.id).subscribe(data => {
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
