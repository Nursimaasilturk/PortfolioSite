import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './Components/Layout/main-dashboard/main-dashboard.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { ProjectComponent } from './Components/Pages/project/project.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { ProjectDetailComponent } from './Components/Pages/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'projects',
        component: ProjectComponent,
        children: [
          {
            path: 'detail/:id',
            component: ProjectDetailComponent,
          },
        ],
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
