import {Component} from '@angular/core'
import { UserService } from 'app/shared/user.service';

@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.html'
})
export class NavBarComponent{

    constructor(private us:UserService){

    }
}