import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: []
})
export class ThirdPartyModule { }
