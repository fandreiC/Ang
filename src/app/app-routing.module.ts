import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepDetailsComponent } from './dep-details/dep-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent },
  { path: 'empLst' , component: EmployeeListComponent },
  { path: 'empDtls' , component: EmployeeDetailComponent },
  { path: 'depLst', component: DepartmentComponent },
  { path: 'dep/:id', component: DepDetailsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ EmployeeListComponent, DepartmentComponent, PageNotFoundComponent, DepDetailsComponent ]
// export const routingComponents = []
