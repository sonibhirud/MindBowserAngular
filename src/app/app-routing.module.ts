import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';


const routes: Routes = [
  {path:'',component:ManagerLoginComponent},
  {path:'login', component: ManagerLoginComponent},
  {path:'home', component: HomeComponent,canActivate:[RouteGuardService]},
  {path:'addEmployee', component: AddEmployeeComponent,canActivate:[RouteGuardService]},
  {path:'update', component: UpdateEmployeeComponent,canActivate:[RouteGuardService]},
  {path:'delete', component: DeleteEmployeeComponent,canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent,canActivate:[RouteGuardService]},
  {path:'**',component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
