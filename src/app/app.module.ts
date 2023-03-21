import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { WrapperFooterComponent } from './home/wrapper-footer/wrapper-footer.component';
import { HomeComponent } from './home/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {ColorPickerModule} from 'primeng/colorpicker';
import {ButtonModule} from 'primeng/button';
import {ScrollingModule} from '@angular/cdk/scrolling';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WrapperFooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ColorPickerModule,ButtonModule,ScrollingModule

  ],
  providers:[ ],

  bootstrap: [AppComponent]
})
export class AppModule { }
