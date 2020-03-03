import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public errorMessage="-no-er-";
  public isError: boolean = false;
  public employees = [ ];


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
                         .subscribe(data => this.employees = data ,
                                    error => this.errorMessage = error );

    console.log(this.errorMessage);
    if(!(this.errorMessage === "-no-er-")){ this.isError = true;}
    console.log(this.isError);
    console.log(this.errorMessage);
  }

}
