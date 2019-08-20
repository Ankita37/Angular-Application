import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEmpDtls } from 'app/shared/empDtls.model';

@Component({

    selector: 'employee-details',
    template: `
    <div [routerLink]= "['/allEmployees',employeeDtls?.empId]"class="col-md-5 col-md-offset-1 well hoverwell thumbnail">
        <div class="container ">
            <h2>
                <div *ngIf="employeeDtls?.empName=='Ankita'; else otherName">
                {{employeeDtls?.empName|uppercase}}
                </div>
                <ng-template #otherName>{{employeeDtls?.empName|uppercase}}</ng-template>
            </h2>
                <div [ngSwitch] = "employeeDtls?.empId">
                    Employee Id : {{employeeDtls?.empId|duration}}
                    <span *ngSwitchCase="'1'">[One]</span>
                    <span *ngSwitchCase="'2'">[Two]</span>
                    <span *ngSwitchDefault>[Three]</span>
                </div>
                <div>{{3.14345435|number:'2.1-2'}}</div>
                <div>Date of Birth : {{employeeDtls?.empDOB|date:'y/M/d'}}</div>
                <div>Mobile Number : {{employeeDtls?.empMobileNo}}</div>
                <b>Employee Address</b>
                <div class="container">
                    <div>Address Line 1 : {{employeeDtls?.empAddress.addressLine1}}</div>
                    <div>Address Line 2 : {{employeeDtls?.empAddress.addressLine2}}</div>
                    <div>City : {{employeeDtls?.empAddress.city}}</div>
                    <div>District : {{employeeDtls?.empAddress.district}}</div>
                    <div [ngStyle] = "pickStyle()">State : {{employeeDtls?.empAddress.state}}</div>
                    <div *ngIf="employeeDtls?.empCountry">
                        Country : {{employeeDtls.empCountry}}
                    </div>
                </div>
        </div>
    </div>

   

    `,
    /*<div>
        <button (click)="sendEmpData()">Send Data </button>
    </div>*/
    /*styles: [`
    h1{color:blue}
`]*/
    styles: [`
        .thumbnail{min-height:250px}
    `]
})
export class EmployeeDetailsComponent {
    @Input() employeeDtls: IEmpDtls
    @Output() sendEmpDtls = new EventEmitter()

    empName = 'Ankita'

    pickStyle() {
        if (this.employeeDtls.empAddress.state == 'Maharashtra') {
            return { color: 'red', 'font-weight': 'bold' }
        } else {
            return { color: 'green' }
        }
    }

    sendEmpData() {
        this.sendEmpDtls.emit(this.empName)
    }

    add() {
        console.log("Inside add...")
    }


}