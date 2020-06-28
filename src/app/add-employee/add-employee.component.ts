import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 
employee:Employee=new Employee();
  submitted = false;

  constructor(private employeeService:EmployeeService
    
    ) { }

  ngOnInit(): void {
    this.submitted=false;
  }

  employeesaveform=new FormGroup({  
    empFirstName:new FormControl('' , [Validators.required , Validators.minLength(20) ] ), 
  empLastName:new FormControl('' , [Validators.required , Validators.minLength(20) ] ), 
 empAddress:new FormControl('' , [Validators.required , Validators.minLength(40) ] ),
 empCity:new FormControl('' , [Validators.required , Validators.minLength(10) ] ), 
empBirthDate:new FormControl('' , [Validators.required] ),
    empMobileNo:new FormControl('',[Validators.required])
  });
  empAddress:string;
  empCity:string;
  empBirthDate:Date;
  empMobileNo:number;

  saveEmployee(saveEmployee){  
    this.employee=new Employee();     
    this.employee.empFirstName=this.empFirstName.value;  
    this.employee.empLastName=this.empLastName.value; 
    this.employee.empAddress=this.emp_Address.value; 
    this.employee.empCity=this.emp_City.value; 
    this.employee.empBirthDate=this.emp_BirthDate.value; 
    this.employee.empMobileNo=this.emp_MobileNo.value;  
    this.submitted = true;  
    this.save();  
  } 

  save() {  
    this.employeeService.createEmployee(this.employee)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.employee = new Employee();  
  } 

  get empFirstName(){  
    return this.employeesaveform.get('empFirstName');  
  }  

  get empLastName(){  
    return this.employeesaveform.get('empLastName');  
  }
  
  get emp_Address(){  
    return this.employeesaveform.get('empAddress');  
  }
  get emp_City(){  
    return this.employeesaveform.get('empCity');  
  }
 
  get emp_BirthDate(){  
    return this.employeesaveform.get('empBirthDate');  
  }
  get emp_MobileNo(){  
    return this.employeesaveform.get('empMobileNo');  
  } 

  addEmployeeForm(){  
    this.submitted=false;  
    this.employeesaveform.reset();  
  } 


   
}
