import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LogInComponent} from './log-in/log-in.component'
import{SignUpComponent} from './sign-up/sign-up.component'

const routes: Routes = [

  {path:'Login',component:LogInComponent},
  {path:'Signup',component:SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }