import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Subject, Observable } from 'rxjs';
import { Employee } from '../employee';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employeesArray: any[] = [];  
  
  dtTrigger: Subject<any>= new Subject();  
  
  employees: Observable<Employee[]>;  
  employee : Employee=new Employee();  
  deleteMessage=false;  
  employeelist:any;  
  isupdated = false;  

  ngOnInit(): void {

    this.isupdated=false;      
    this.employeeService.getEmployeeList().subscribe(data =>{  
    this.employees =data;  
    this.dtTrigger.next();  
    }) 
  }


  deleteEmployee(empId: number) {  
    this.employeeService.deleteEmployee(empId)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.employeeService.getEmployeeList().subscribe(data =>{  
            this.employee =data  
            })  
        },  
        error => console.log(error));  
  }  


  updateEmployee(empId: number){  
    this.employeeService.getEmployee(empId)  
      .subscribe(  
        data => {  
          this.employeelist=data             
        },  
        error => console.log(error));  
  }  

  employeeUpdateform=new FormGroup({  
    empId:new FormControl(),  
    empFirstName:new FormControl(),  
    empLastName:new FormControl(),  
    empAddress:new FormControl(), 
    empCity:new FormControl(), 
    empBirthDate:new FormControl(), 
    empMobileNo:new FormControl() 
  });
  
  
  updateEmp(updEmp){  
    this.employee=new Employee();   
   this.employee.empId=this.EmpId.value;  
   this.employee.empFirstName=this.EmpFirstName.value;  
   this.employee.empLastName=this.EmpLastName.value;  
   this.employee.empAddress=this.EmpAddress.value; 
   this.employee.empCity=this.EmpCity.value; 
   this.employee.empBirthDate=this.EmpBirthDate.value; 
   this.employee.empMobileNo=this.EmpMobileNo.value;  
 



this.employeeService.updateEmployee(this.employee.empId,this.employee).subscribe(  
  data => {       
    this.isupdated=true;  
    this.employeeService.getEmployeeList().subscribe(data =>{  
      this.employees =data  
      })  
  },  
  error => console.log(error));  
}


get EmpId(){  
  return this.employeeUpdateform.get('empId');  
}

get EmpFirstName(){  
  return this.employeeUpdateform.get('empFirstName');  
}  
get EmpLastName(){  
  return this.employeeUpdateform.get('empLastName');  
} 
get EmpAddress(){  
  return this.employeeUpdateform.get('empAddress');  
}
get EmpCity(){  
  return this.employeeUpdateform.get('empCity');  
}
get EmpBirthDate(){  
  return this.employeeUpdateform.get('empBirthDate');  
}
get EmpMobileNo(){  
  return this.employeeUpdateform.get('empMobileNo');  
}

changeisUpdate(){  
  this.isupdated=false;  
} 


}
  