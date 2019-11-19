import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FlexComponent } from './flex/flex.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgxPaginationModule,
    FilterPipeModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
