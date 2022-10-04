import { AuthGuardService } from './services/auth-guard.service';
import { TasksComponent } from './views/tasks/tasks.component';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './views/profile/profile.component';
import { EditprofileComponent } from './views/editprofile/editprofile.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { LoginSignupAuthService } from './services/login-signup-auth.service';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [LoginSignupAuthService]},
  {path: 'signup', component: SignupComponent, canActivate: [LoginSignupAuthService]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuardService]},
  {path: 'addTask', component: AddTaskComponent, canActivate:[AuthGuardService]},
  {path: 'tasks', component: TasksComponent, canActivate:[AuthGuardService]},
  {path: 'editProfile', component: EditprofileComponent, canActivate:[AuthGuardService]},
  {path: 'task/:id', component: EditTaskComponent, canActivate:[AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
