import { CondimentsComponent } from './condiments/condiments.component';
import { HotdogsComponent } from './hotdogs/hotdogs.component';
import { StoreMainComponent } from './store-main/store-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : 'store', component : StoreMainComponent, children : 
      [
        {path : '', redirectTo : 'hotdogs', pathMatch: 'full'},
        {path : 'hotdogs', component: HotdogsComponent},
        {path : 'condiments', component: CondimentsComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
