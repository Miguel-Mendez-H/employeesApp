import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})


export class StatusComponent implements OnInit {
  employees: any

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getEmployees()
  }
  public async getEmployees() {
    this.apiService.getDataEmployes()
      .subscribe(response => {
        this.employees = response
      })
  }

  selectEmployeeId(id: Number) {
      this.router.navigate(['/employees-info', id])
  }

}
