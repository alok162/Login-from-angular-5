import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
 {
 path:'dashboard',
 component:DashboardComponent
 },
 {
 path:'',
 component:LoginFormComponent
 }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
   RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
