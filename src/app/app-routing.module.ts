import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { InnerviewComponent } from './innerview/innerview.component';
import { LaunchscreenComponent } from './launchscreen/launchscreen.component';
import { ListviewComponent } from './listview/listview.component';
import { LivevideoComponent } from './livevideo/livevideo.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchscreenComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'listview',
    component: ListviewComponent,
  },
  {
    path: 'innerview',
    component: InnerviewComponent,
  },
  {
    path: 'livevideo',
    component: LivevideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
