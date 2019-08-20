import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "app/shared/user.service";
import { Router } from "@angular/router";

@Component({
    templateUrl:'./profile.html'
})
export class ProfileComponent{
    profileForm: FormGroup
    firstName : FormControl
    lastName : FormControl

    constructor(private us:UserService,private route:Router){

    }

    ngOnInit(){
        this.firstName=new FormControl(this.us.currentUser.firstName,
            [Validators.required,Validators.pattern('[a-zA-Z].*')])
        this.lastName = new FormControl(this.us.currentUser.lastName,Validators.required)
        this.profileForm= new FormGroup({
            firstName:this.firstName,
            lastName:this.lastName
        })
    }

    save(formValues){
       this.us.updateUser(formValues.firstName,formValues.lastName)
       this.route.navigate(['allEmployees'])
    }

    validateFName(){
        return this.firstName.valid || this.firstName.untouched
    }

    validateLName(){
        return this.lastName.valid || this.lastName.untouched
    }
}