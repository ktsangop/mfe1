import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MicroFrontend1Module } from './micro-frontend-1/micro-frontend-1.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'what',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MicroFrontend1Module,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [MicroFrontend1Module]
})
export class AppModule { }
