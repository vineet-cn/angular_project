import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProfileComponent } from '../components/dashboard/profile/profile.component';
import { SettingsComponent } from '../components/dashboard/settings/settings.component';
import { NotFoundComponentComponent } from '../components/not-found-component/not-found-component.component';
import { LoginComponent } from '../components/login/login.component';

import { ChildComponent } from '../components/child/child.component';
import { TempleteformComponent } from '../components/templeteform/templeteform.component';
import { BindingsComponent } from '../components/bindings/bindings.component';
import { StructualdirectivesComponent } from '../components/structualdirectives/structualdirectives.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from '../components/reactiveform/reactiveform.component';
import { GetapiComponent } from '../components/getapi/getapi.component';
import { PostapiComponent } from '../components/postapi/postapi.component';
import { ParentComponent } from '../components/parent/parent.component';


const routes: Routes = [

  // ✅ 1. Basic Routing
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },


  // ✅ 2. Simple Route
  { path: 'about', component: AboutComponent },

  // ✅ 3. Child Routing
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },

  // ✅ 4. Lazy Loading (admin module auto created)
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminModule)
  },

  // ✅ 5. Redirect
  { path: 'start', redirectTo: 'login', pathMatch: 'full' },
  {
     path:'login',component:LoginComponent
  },
  {
    path:'prent',
    component:ParentComponent
  },
  {
    path:'child',
    component:ChildComponent
  },

  // ✅ 6. Route Parameter
  { path: 'user/:id', component: AboutComponent },
  {
     path:'templeteform',component:TempleteformComponent
  },
  {
    path:'binding',component:BindingsComponent

  },
  {
      path:'structualdirective',component:StructualdirectivesComponent
  },
  {
    path:'ReactiveformComponent',component:ReactiveformComponent

  },
  {
      path:'child',component:ChildComponent
  },
  {
      path:'parent',component:ParentComponent
  },
  {
path:'postapi',component:PostapiComponent
  },
   {
    path:'getapi',component:GetapiComponent

  },

  //✅ 7. Wildcard (404)
  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}