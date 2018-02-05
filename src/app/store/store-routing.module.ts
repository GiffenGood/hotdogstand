import { CondimentsComponent } from './condiments/condiments.component';
import { HotdogsComponent } from './hotdogs/hotdogs.component';
import { StoreMainComponent } from './store-main/store-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotdogComponent } from './hotdog/hotdog.component';
import { HotdogsResolver } from './hotdogs/hotdogs-resolver';

const routes: Routes = [
  {
    path: 'store', component: StoreMainComponent, children:
    [
      {
        path: '',
        redirectTo: 'hotdogs',
        pathMatch: 'full'
      },
      {
        path: 'hotdogs',
        component: HotdogsComponent,
        resolve: {
          hotdogs: HotdogsResolver
        },
        data: { title: 'Kosher Baby!' },
        children: [
          {
            path: ':id',
            component: HotdogComponent
          }
        ]
      },
      {
        path: 'condiments',
        component: CondimentsComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
