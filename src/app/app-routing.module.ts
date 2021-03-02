import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListviewComponent } from './listview/listview.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
  },
  {
    path: 'listview',
    component: ListviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
