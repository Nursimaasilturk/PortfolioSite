import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashboardComponent } from './Components/Layout/main-dashboard/main-dashboard.component';
import { NavbarComponent } from './Components/Layout/navbar/navbar.component';
import { SidebarComponent } from './Components/Layout/sidebar/sidebar.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { ProjectComponent } from './Components/Pages/project/project.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { HomeComponent } from './Components/Pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    NavbarComponent,
    SidebarComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
