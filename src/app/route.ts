import {Routes} from '@angular/router'
import { EmployeeComponent } from './events/employee.component';
import { EmpDetailedInfo } from './events/empDetailedInfo.component';
import { CreateEmployeeComponent } from './events/createEmp.component';
import { ErrorComponent } from './shared/error.component';
import { ErrorRouteService } from './shared/errorRoute.service';

export const appRoutes:Routes=[
    {path:'allEmployees',component:EmployeeComponent},
    {path:'allEmployees/:id',component:EmpDetailedInfo,canActivate:[ErrorRouteService]},
    {path:'',redirectTo:'allEmployees',pathMatch:'full'},
    {path:'createEmp',component:CreateEmployeeComponent},
    {path:'404',component:ErrorComponent},
    {path:'user',loadChildren:'app/user/user.module#UserModule'}

]