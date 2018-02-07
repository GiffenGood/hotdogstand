import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';
import { MsgListComponent } from './msg-list/msg-list.component';
import { MsgService } from './msg.service';
import { ThirdPartyModule } from '../third-party.module';

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
    ThirdPartyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MsgListComponent],
  providers: [
    MsgService
  ]
})
export class MsgsModule { }
