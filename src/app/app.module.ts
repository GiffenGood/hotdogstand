import { HomeComponent } from './home.component';
import { StoreModule } from './store/store.module';
import { MatButtonModule } from '@angular/material/button';
import { ThirdPartyModule } from './third-party.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MsgsModule } from './msgs/msgs.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ThirdPartyModule,
    StoreModule,
    MsgsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
