import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';
import { MsgListComponent } from './msg-list/msg-list.component';

const routes: Route[] = [
  {
    path: 'msgs',
    outlet: 'sidebar',
    component: MsgListComponent
   }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MsgListComponent]
})
export class MsgsModule { }
