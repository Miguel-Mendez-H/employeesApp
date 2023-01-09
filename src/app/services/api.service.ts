import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, map} from 'rxjs';

const API_URL = "https://dummy.restapiexample.com/api/v1"

export interface Employee {
  id: Number,
  name:string,
  salary:string,
  age:string
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  constructor(private http: HttpClient) {}
  
  getDataEmployes(){
    return this.http.get<{data: Employee[]}>(`${API_URL}/employees`).pipe(
      map((Response: { data: Employee[]; }) => Response.data)
    )
  }

  getDataEmployeeById(id:Number){
    return this.http.get<{data:Employee[]}>(`${API_URL}/employee/${id}`).pipe(
      map((Response:{data:Employee[]})=> Response.data)
    )

  }

  createEmployee(employee: Employee[]) {
    return this.http.post(`${API_URL}/create`, employee);
  }

  deleteEmployee(id:Number){
    return this.http.delete(`${API_URL}/delete/${id}`)
  }

  updateEmployee(id:Number , data:Employee[]){
    return this.http.put(`${API_URL}/update/${id}`, data)
  }
}
