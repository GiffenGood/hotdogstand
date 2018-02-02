import { ThirdPartyModule } from './../third-party.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreMainComponent } from './store-main/store-main.component';
import { HotdogsComponent } from './hotdogs/hotdogs.component';
import { CondimentsComponent } from './condiments/condiments.component';
import { HotdogComponent } from './hotdog/hotdog.component';
import { HotdogService } from './hotdog.service';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    ThirdPartyModule
  ],
  declarations: [
    StoreMainComponent,
    HotdogsComponent,
    CondimentsComponent,
    HotdogComponent
  ],
  providers: [
    HotdogService
  ]
})
export class StoreModule { }
