import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.route";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[ProfileComponent,LoginComponent],
    imports:[CommonModule,RouterModule.forChild(userRoutes),FormsModule,ReactiveFormsModule],
    providers:[]


})
export class UserModule{

}