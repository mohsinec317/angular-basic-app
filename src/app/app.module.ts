import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ListviewComponent } from './listview/listview.component';
import { LoadjsonService } from './loadjson.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InnerviewComponent } from './innerview/innerview.component';
import { LivevideoComponent } from './livevideo/livevideo.component';
import { LaunchscreenComponent } from './launchscreen/launchscreen.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [AppComponent, DetailsComponent, ListviewComponent, InnerviewComponent, LivevideoComponent, LaunchscreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoadjsonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
