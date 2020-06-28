import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  createEmployee(employee: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveEmployee', employee);  
  }

  getEmployeeList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'employeesList');  
  } 


  deleteEmployee(empId: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteEmployee/${empId}`, { responseType: 'text' });  
  }

  updateEmployee(empId: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/updateEmployee/${empId}`, value);  
  }  


  getEmployee(empId: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/employee/${empId}`);  
  }
}
