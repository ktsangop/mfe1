import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mf1RootComponent } from './mf1-root/mf1-root.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'what',
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
  exports: [Mf1RootComponent]
})
export class MicroFrontend1Module { }
