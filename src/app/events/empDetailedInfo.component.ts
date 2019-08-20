import { Component } from "@angular/core";
import { EmployeeService } from "app/shared/employee.service";
import { ActivatedRoute } from "@angular/router";
import { IEmpDtls } from "app/shared/empDtls.model";

@Component({
    templateUrl: './empInfo.html'
})
export class EmpDetailedInfo{
    employeeDtls:IEmpDtls

    constructor(private ed:EmployeeService, private actRoute:ActivatedRoute){
        this.employeeDtls=ed.getEmp(+this.actRoute.snapshot.params['id'])
    }
}

