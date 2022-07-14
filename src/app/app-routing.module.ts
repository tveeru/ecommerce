import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './common/signIn/signIn.component';
import { SignUpComponent  } from './common/signUp/signUp.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'signin', component: SignInComponent
  },{
    path: '', redirectTo: '/signin', pathMatch: 'full'
  },{
    path: 'signup', component: SignUpComponent
  },{
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
