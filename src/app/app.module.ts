import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { AdminModule } from './module/admin/admin.module';
import { AppRoutingModule } from './module/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';

import { ChildComponent } from './components/child/child.component';
import { MypipePipe } from './pipe/mypipe.pipe';
import { TempleteformComponent } from './components/templeteform/templeteform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingsComponent } from './components/bindings/bindings.component';
import { StructualdirectivesComponent } from './components/structualdirectives/structualdirectives.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { GetapiComponent } from './components/getapi/getapi.component';
import { HttpClientModule } from '@angular/common/http';
import { PostapiComponent } from './components/postapi/postapi.component';
import { ApiserviceComponent } from './components/apiservice/apiservice.component';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ParentComponent } from './components/parent/parent.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    NotFoundComponentComponent,

    ChildComponent,
    MypipePipe,
    TempleteformComponent,
    BindingsComponent,
    StructualdirectivesComponent,
    ReactiveformComponent,
    GetapiComponent,
    PostapiComponent,
    ApiserviceComponent,
    ParentComponent
  ],
  imports: [
      // BrowserAnimationsModule,
       BsDatepickerModule.forRoot(),
        BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule, HttpClientModule
  //     MatInputModule,
  // MatDatepickerModule,
  // MatFormFieldModule,
  // MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
