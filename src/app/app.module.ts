import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './events/employee.component';
import { EmployeeDetailsComponent } from './events/employeeDetails.component';
import { EmployeeService } from './shared/employee.service';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { EmpDetailedInfo } from './events/empDetailedInfo.component';
import { CreateEmployeeComponent } from './events/createEmp.component';
import { ErrorComponent } from './shared/error.component';
import { ErrorRouteService } from './shared/errorRoute.service';
import { UserService } from './shared/user.service';
import { DurationPipe } from './shared/duration.pipe';
import { AsyncPipe1Component } from './asyncpipedemo/asyncpipe.component';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeDetailsComponent,NavBarComponent,
    EmpDetailedInfo,CreateEmployeeComponent,ErrorComponent,DurationPipe,AsyncPipe1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService,ErrorRouteService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
