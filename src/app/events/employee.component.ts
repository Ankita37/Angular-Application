import { Component } from '@angular/core';
import { EmployeeService } from 'app/shared/employee.service';
import { IEmpDtls } from 'app/shared/empDtls.model';


@Component({
    selector: 'employee-list',
    //templateUrl: './employee.html',
    template:`
        <div>
            <h1>
                Employee Details
            </h1>
            <employee-details #myTemplateTest *ngFor="let employeeDtls of employeesDtls" [employeeDtls] = "employeeDtls" (sendEmpDtls)="receiveData($event)"></employee-details>

            

            



        </div>
    `,
   /* <br/>

            Change City <input type="text" [(ngModel)]='city'>
            <br/>

            <br/>
            <button (click)="myTemplateTest.add()">Click Me</button>

            <br/>
            <button (click)="display()">Click Me</button>*/
    styles: [`
        h1{color:black}
    `]
})
export class EmployeeComponent{

    city = 'Mumbai'

    employeesDtls:IEmpDtls[]

    constructor(private es : EmployeeService){
        this.employeesDtls=es.getEmployeeDetails();
    }

   /* employeesDtls = [
        {
        empId : 1,
        empName : 'Ankita',
        empDOB : '12/11/1992',
        empMobileNo : '9860723480',
        empAddress :{
            addressLine1 : 'Trimbak Saraswati',
            addressLine2 : 'Birla College Road',
            city : 'Kalyan',
            district : 'Thane',
            state : 'Kerala'
            },
        empCountry : 'India'
        },
        {
            empId : 2,
            empName : 'Sweety',
            empDOB : '12/11/1992',
            empMobileNo : '9860723480',
            empAddress :{
                addressLine1 : 'Trimbak Saraswati',
                addressLine2 : 'Birla College Road',
                city : 'Kalyan',
                district : 'Thane',
                state : 'Maharashtra'
                }
        },
        {
            empId : 3,
            empName : 'Mrunali',
            empDOB : '12/11/1992',
            empMobileNo : '9860723480',
            empAddress :{
                addressLine1 : 'Trimbak Saraswati',
                addressLine2 : 'Birla College Road',
                city : 'Kalyan',
                district : 'Thane',
                state : 'Maharashtra'
                }
        },
    ] */

    display(){
        console.log("Inside display...")
    }

    receiveData(data){
        console.log("Data received" +data)
    }

}