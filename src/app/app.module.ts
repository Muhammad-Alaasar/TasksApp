import { LoginSignupAuthService } from './services/login-signup-auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './views/profile/profile.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { TasksComponent } from './views/tasks/tasks.component';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { TasksService } from './services/tasks.service';
import { EditprofileComponent } from './views/editprofile/editprofile.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    TasksComponent,
    AddTaskComponent,
    EditprofileComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    { // Token Service (TokenInterceptorService)
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    },
    TasksService,
    AuthGuardService,
    LoginSignupAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
