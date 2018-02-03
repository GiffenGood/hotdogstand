import { ThirdPartyModule } from './../third-party.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreMainComponent } from './store-main/store-main.component';
import { HotdogsComponent } from './hotdogs/hotdogs.component';
import { CondimentsComponent } from './condiments/condiments.component';
import { HotdogComponent } from './hotdog/hotdog.component';
import { HotdogService } from './hotdog.service';
import { HotdogsResolver } from './hotdogs/hotdogs-resolver';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThirdPartyModule,
    StoreRoutingModule
  ],
  declarations: [
    StoreMainComponent,
    HotdogsComponent,
    CondimentsComponent,
    HotdogComponent,
  ],
  providers: [
    HotdogService,
    HotdogsResolver
  ]
})
export class StoreModule { }

