import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashboardComponent } from './Components/Layout/main-dashboard/main-dashboard.component';
import { NavbarComponent } from './Components/Layout/navbar/navbar.component';
import { SidebarComponent } from './Components/Layout/sidebar/sidebar.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { ProjectComponent } from './Components/Pages/project/project.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { ProjectDetailComponent } from './Components/Pages/project-detail/project-detail.component';
import { ProjectAllComponent } from './Components/Pages/project-all/project-all.component';
import { LangComponent } from './Components/Common/lang/lang.component';
import { GlobalService } from './global.service';
import { FormsModule } from '@angular/forms';

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
    ProjectDetailComponent,
    ProjectAllComponent,
    LangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
