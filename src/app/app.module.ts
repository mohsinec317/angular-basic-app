import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ListviewComponent } from './listview/listview.component';
import { LoadjsonService } from './loadjson.service';

const appRoutes: Routes = [];

@NgModule({
  declarations: [AppComponent, DetailsComponent, ListviewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LoadjsonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
