import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mf1RootComponent } from './mf1-root/mf1-root.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Mf1RootComponent
  }
];

@NgModule({
  declarations: [
    Mf1RootComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class MicroFrontend1Module { }
