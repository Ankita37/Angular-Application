import { Injectable } from "@angular/core";
import { IEmpDtls } from "./empDtls.model";

@Injectable()
export class EmployeeService{

        getEmployeeDetails():IEmpDtls[]{
            return EMPDTLS
        }

        getEmp(id:number):IEmpDtls{
            return EMPDTLS.find(emp=>emp.empId==id)
        }

        addNewEmployee(empDt){
            EMPDTLS.push(empDt)
        }
}

const EMPDTLS:IEmpDtls[] = [
    {
    empId : 1,
    empName : 'Ankita',
    empDOB : new Date('12/11/1992'),
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
        empName : 'Pooja',
        empDOB : new Date('12/11/1992'),
        empMobileNo : '9860723480',
        empAddress :{
            addressLine1 : 'Trimbak Saraswati',
            addressLine2 : 'Birla College Road',
            city : 'Kalyan',
            district : 'Thane',
            state : 'Maharashtra',
            },
        empCountry : 'India'
    },
    {
        empId : 3,
        empName : 'Mrunali',
        empDOB : new Date('12/11/1992'),
        empMobileNo : '9860723480',
        empAddress :{
            addressLine1 : 'Trimbak Saraswati',
            addressLine2 : 'Birla College Road',
            city : 'Kalyan',
            district : 'Thane',
            state : 'Maharashtra'
            }
    },
]