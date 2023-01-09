import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInfoComponent } from './components/content/employee-info/employee-info.component';
import { PageNotFoundComponent } from './components/content/page-not-found/page-not-found.component';
import { StatusComponent } from './components/content/status/status.component';
import { UserinfoComponent } from './components/content/userinfo/userinfo.component';



const routes: Routes = [
  {path:'', redirectTo:'/employees', pathMatch:'full'},
  {path:'employees', component: StatusComponent},
  {path:'employees-info/:id', component: EmployeeInfoComponent},
  {path:'user-info', component: UserinfoComponent},
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
