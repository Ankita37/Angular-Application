import { Injectable } from "@angular/core";
import { IUser } from "app/user/user.model";

@Injectable()
export class  UserService{

    currentUser:IUser

    validateUser(uName:string,password:string){
        this.currentUser={
            id : 1,
            userName : uName,
            firstName : 'Ankita',
            lastName : 'More'
        }
    }

    isAuthenticated(){
        return !!this.currentUser
    }

    updateUser(fName:string,lName:string){
        this.currentUser.firstName=fName
        this.currentUser.lastName=lName
    }
}