import { Component } from "@angular/core";
import { UserService } from "app/shared/user.service";
import {  Router } from "@angular/router";

@Component({
    templateUrl:'./login.html'
})
export class LoginComponent{

    constructor(private us:UserService,private rs:Router){

    }

    login(formValues){
        this.us.validateUser(formValues.userName,formValues.password)
        this.rs.navigate(['allEmployees'])
    }
}