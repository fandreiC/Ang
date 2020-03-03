import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departments = [ ];

  constructor(private _departmentService: DepartmentService,
              private _router: Router) { }

  ngOnInit(): void {
    this._departmentService.getDepartments()
                            .subscribe(data => this.departments = data );
  }

  OnSelect(department){
    this._router.navigate(['/dep', department.id]);
  }

}
