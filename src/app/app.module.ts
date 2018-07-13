import { CourseService } from './course.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { CoursesComponent } from './Courses.component';
import { CourseCliComponent } from './course-cli/course-cli.component';
import { DataEventsComponent } from './data-events/data-events.component';
import { ReusableComponent } from './reusable/reusable.component';
import { DirectiveComponent } from './directive/directive.component';
import { CusDirectiveDirective } from './cus-directive.directive';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ApidataComponent } from './apidata/apidata.component';
import { HttpModule } from '@angular/http';
import { DummyDataService } from './services/dummy-data.service';
import { GlobalErrorHandler } from './common/gloablErrorHandler';
import { UserListComponent } from './routing/user-list/user-list.component';
import { UserDetailComponent } from './routing/user-detail/user-detail.component';
import { HeaderComponent } from './common/header/header.component';
import { AutheAuthoComponent } from './authe-autho/authe-autho.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './services/login-service';
import { routeWithChild } from './common/roots';
import { RouteProtector } from './common/RouteProtector';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseCliComponent,
    DataEventsComponent,
    ReusableComponent,
    DirectiveComponent,
    CusDirectiveDirective,
    TemplateFormComponent,
    ReactiveFormsComponent,
    ApidataComponent,
    UserListComponent,
    UserDetailComponent,
    HeaderComponent,
    AutheAuthoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routeWithChild)
  ],
  providers: [
    CourseService,
    DummyDataService,
    LoginService,
    RouteProtector,    
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
