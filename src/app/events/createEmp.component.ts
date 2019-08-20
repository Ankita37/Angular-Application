import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "app/shared/employee.service";

@Component({
    templateUrl:'./createEmp.html'
})
export class CreateEmployeeComponent{

    constructor(private route:Router,private ed:EmployeeService){

    }
    saveEmpData(formsValue){
        console.log(formsValue)
        this.ed.addNewEmployee(formsValue)
        this.route.navigate(['/allEmployees'])
    }

    cancel(){
        this.route.navigate(['/allEmployees'])
    }

}