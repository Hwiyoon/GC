import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Route, Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MaterialModule} from "@angular/material";
import { HomeComponent } from './home/home.component';
import { CheckpageComponent } from './home/checkpage/checkpage.component';
import { QnaComponent } from './home/qna/qna.component';
import { QrcodepageComponent } from './home/checkpage/qrcodepage/qrcodepage.component';
import { AttendencelistpageComponent } from './home/checkpage/attendencelistpage/attendencelistpage.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    {path: 'checkpage', component: CheckpageComponent, children: [
      {path: 'qrcodepage', component: QrcodepageComponent},
      {path: 'attendencelistpage', component: AttendencelistpageComponent},
    ]},
    {path: 'qnapage', component:QnaComponent},
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CheckpageComponent,
    QnaComponent,
    QrcodepageComponent,
    AttendencelistpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
