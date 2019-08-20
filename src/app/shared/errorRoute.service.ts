import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot,Router } from "@angular/router";
import { EmployeeService } from "./employee.service";

@Injectable()
export class ErrorRouteService implements CanActivate{
    constructor(private es:EmployeeService,private route:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
           const exists =  !!this.es.getEmp(+route.params['id'])
           if(!exists){
               this.route.navigate(['404'])
           }
           return true;
    }
}